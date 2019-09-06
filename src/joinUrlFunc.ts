import { JoinUrl } from './joinUrl';

export function joinUrl(baseUrl: string, ...paths): string {
  return new JoinUrl(baseUrl, paths).toString();
}

export function joinUrlP(baseUrl: string, paths: string[], params: object = {}): string {
  return new JoinUrl(baseUrl, paths).queryParams(params).toString();
}
