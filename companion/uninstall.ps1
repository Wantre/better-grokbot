# Removes the per-user Better GrokBot install. Does not touch Grok Bot.
$ErrorActionPreference = "Continue"
$InstallDir = Join-Path $env:LOCALAPPDATA "BetterGrokBot"
$TaskName = "BetterGrokBot"

Get-Process -Name "BetterGrokBot" -ErrorAction SilentlyContinue | ForEach-Object {
    $_ | Stop-Process -Force
}
Start-Sleep -Milliseconds 400

Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue

if (Test-Path -LiteralPath $InstallDir) {
    Remove-Item -LiteralPath $InstallDir -Recurse -Force
}

Write-Host "Better GrokBot desinstalle. Grok Bot n'a pas ete touche."
