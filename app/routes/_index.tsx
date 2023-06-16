import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => [{ title: 'Jorn Blaedel Garbosa' }];

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      EARLY DEVELOPMENT
    </div>
  );
}
