import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permet de rendre le serveur accessible depuis n'importe quelle adresse IP
    port: 8014, // Port sur lequel votre application sera accessible
    strictPort: true, // Assure que le serveur utilisera le port spécifié
    open: false, // Empêche l'ouverture automatique du navigateur
  },
})