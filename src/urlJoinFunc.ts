import { UrlJoin } from './urlJoin';

export function urlJoin(baseUrl: string | undefined, ...paths): string {
  return new UrlJoin(baseUrl, paths).toString();
}

export function urlJoinP(baseUrl: string | undefined, paths: string[], params: object = {}): string {
  return new UrlJoin(baseUrl, paths).queryParams(params).toString();
}
