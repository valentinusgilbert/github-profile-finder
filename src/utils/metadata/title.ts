const APPLICATION_NAME = "Github Profile Finder";

export function getMetadataTitle(title?: string): string {
  if (title === undefined) return APPLICATION_NAME;
  else return `${title} - ${APPLICATION_NAME}`;
}
