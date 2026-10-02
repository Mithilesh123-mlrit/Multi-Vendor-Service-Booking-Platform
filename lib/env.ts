type PublicEnvironment = {
  appUrl: URL;
};

/** Parse public runtime configuration once, with a safe local default. */
export function getPublicEnvironment(): PublicEnvironment {
  const rawAppUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

  try {
    const appUrl = new URL(rawAppUrl);
    if (appUrl.protocol !== 'http:' && appUrl.protocol !== 'https:') {
      throw new Error('must use http or https');
    }
    return { appUrl };
  } catch {
    throw new Error('NEXT_PUBLIC_APP_URL must be a valid http or https URL.');
  }
}
