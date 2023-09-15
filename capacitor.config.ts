import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Dammilo.app',
  appName: 'PHOTTUNE',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      sync: true,
      web: {
        useCamera: false,
        useGallery: true
      }
    }
  }
};

export default config;
