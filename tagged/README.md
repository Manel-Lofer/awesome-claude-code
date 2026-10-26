# Tagged

Outfit sharing for people with no sense of style. Every item in a look is tagged
with its shop, price and link, so you can copy the whole thing.

Built with Expo (React Native + TypeScript). Uses fake data for now; Supabase comes in phase 5.

## Run it on your phone (Expo Go)

1. Install **Node.js** (LTS version) from https://nodejs.org on your computer.
2. Install **Expo Go** on your phone from the App Store or Google Play.
3. In a terminal, from this `tagged` folder:

   ```bash
   npm install
   npx expo start
   ```

4. A QR code appears in the terminal.
   - **iPhone:** open the Camera app, point it at the QR code and tap the banner.
   - **Android:** open Expo Go and tap "Scan QR code".
5. Your phone and computer must be on the **same Wi-Fi**. If it won't connect,
   stop the server (Ctrl+C) and run `npx expo start --tunnel` instead.

Saving a file on your computer reloads the app on your phone automatically.
Shake the phone to open the developer menu.

## Where things live

| Folder | What's inside |
| --- | --- |
| `src/app/` | Screens. Each file is a screen (`index.tsx` is Home). |
| `src/components/` | Reusable pieces: outfit card, masonry feed, filter chips… |
| `src/constants/theme.ts` | Colours, gradients, fonts and spacing. |
| `src/data/seed.ts` | The fake shops, users, outfits and items. |
| `src/lib/data.ts` | Functions screens use to read data (swapped for Supabase later). |
| `src/types.ts` | The shape of every table. |

## Phases

- [x] 1. Project setup + home feed with fake data
- [ ] 2. Shops tab + shop page with the Only/Includes toggle
- [ ] 3. Outfit page with tags
- [ ] 4. Posting outfits
- [ ] 5. Connect Supabase (login, real data, image uploads)
