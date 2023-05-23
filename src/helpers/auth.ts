import { Magic } from 'magic-sdk';

export const magic = new Magic('pk_live_E3A70A075DA48F75');

export async function login(email: string) {
  await magic.auth.loginWithMagicLink({ email });
  const didToken = await magic.user.getIdToken();
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/magic-login`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${didToken}`,
      },
    }
  );
  const userData = await response.json();
  return userData;
}

export async function logout() {
  await magic.user.logout();
}
