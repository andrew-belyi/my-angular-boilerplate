import { Pipe, PipeTransform } from '@angular/core';

const fns: { [key: string]: (...args: any[]) => any[] } = {
  dashboard: () => ['/', 'dashboard'],
  auth: () => ['/', 'auth'],
  toTitleById: (titleId: number) => ['/', 'titles', titleId],
};

@Pipe({
  name: 'routerRedirection',
})
export class RouterRedirectionPipe implements PipeTransform {

  transform(fn: string, ...args: any[]): string[] {
    if (fns.hasOwnProperty(fn)) {
      return fns[fn](...args);
    }
    console.error(`No link generation for: ${fn}`);
    return ['/'];
  }
}
