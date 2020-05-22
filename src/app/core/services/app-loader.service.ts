import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppLoaderService {

  initApp(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}

export function appLoaderFactory(appLoaderService: AppLoaderService): () => Promise<boolean> {
  return () => appLoaderService.initApp();
}
