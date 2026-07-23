const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>503 - Thermal Shutdown</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    background-color: #000;
    color: #b7c4d4;
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    padding: 2rem;
    cursor: pointer;
  }
  .gap { height: 1rem; }
  .title { color: #ffffff; font-weight: 700; }
  .cursor { animation: blink 1s step-start infinite; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
</style>
</head>
<body onclick="window.location.href='/'">
  <div>Idk Inc.</div>
  <div>AnmiTaliDev BIOS v2026.07 Setup Utility</div>
  <div class="gap"></div>
  <div>CPU: AnmiTaliDev Core</div>
  <div>Detecting boot device... FAIL</div>
  <div class="gap"></div>
  <div class="title">*** FATAL ERROR 503 ***</div>
  <div class="title">THERMAL SHUTDOWN</div>
  <div class="gap"></div>
  <div>System halted to prevent hardware damage. Retry once the system has had time to cool down.</div>
  <div class="gap"></div>
  <div>Beep Code: Continuous beep - Thermal event</div>
  <div class="gap"></div>
  <div>Press any key to return to Setup Utility<span class="cursor">_</span></div>
  <script>
    window.addEventListener('keydown', function () { window.location.href = '/'; });
  </script>
</body>
</html>`;

export async function GET() {
  return new Response(html, {
    status: 503,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
