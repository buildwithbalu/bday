param (
    [int]$Port = 4200
)

$root = Join-Path $PSScriptRoot "dist\birthday-app\browser"
if (-not (Test-Path $root)) {
    Write-Error "dist\birthday-app\browser directory not found!"
    exit 1
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
    Write-Host "Birthday app running successfully at: http://localhost:$Port/"
    Write-Host "Press Ctrl+C to stop the server."
} catch {
    Write-Error ("Failed to start HttpListener on port {0}: {1}" -f $Port, $_)
    exit 1
}

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".json"  = "application/json"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".mp4"   = "video/mp4"
    ".webm"  = "video/webm"
    ".mov"   = "video/quicktime"
    ".mp3"   = "audio/mpeg"
    ".woff2" = "font/woff2"
    ".txt"   = "text/plain; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "index.html"
        }

        # Normalize path
        $decodedPath = [System.Uri]::UnescapeDataString($rawPath).Replace('/', '\')
        $targetFile = Join-Path $root $decodedPath

        # SPA fallback
        if (-not (Test-Path $targetFile -PathType Leaf)) {
            $targetFile = Join-Path $root "index.html"
        }

        $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
        $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

        $response.ContentType = $contentType
        $response.Headers.Add("Access-Control-Allow-Origin", "*")

        try {
            $bytes = [System.IO.File]::ReadAllBytes($targetFile)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } catch {
            $response.StatusCode = 500
        } finally {
            $response.OutputStream.Close()
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
