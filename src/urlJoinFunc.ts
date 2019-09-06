import { UrlJoin } from './urlJoin';

export function urlJoin(baseUrl: string, ...paths): string {
  return new UrlJoin(baseUrl, paths).toString();
}

export function urlJoinP(baseUrl: string, paths: string[], params: object = {}): string {
  return new UrlJoin(baseUrl, paths).queryParams(params).toString();
}
