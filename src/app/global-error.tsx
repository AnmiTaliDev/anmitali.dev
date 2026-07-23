'use client';

import BiosError from '@/components/Bios/BiosError';

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <BiosError
          code="500"
          title="FATAL SYSTEM ERROR"
          message="A critical fault occurred at the root of the system."
          beepCode="Continuous beep - Fatal board error"
        />
      </body>
    </html>
  );
}
