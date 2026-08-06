import chatgpt from '../assets/apps/chatgpt.png';
import spotify from '../assets/apps/spotify.png';
import notion from '../assets/apps/notion.png';
import netflix from '../assets/apps/netflix.png';
import duolingo from '../assets/apps/duolingo.png';
import capcut from '../assets/apps/capcut.png';
import discord from '../assets/apps/discord.png';
import whatsapp from '../assets/apps/whatsapp.png';

const appStoreUrls = {
  spotify: 'https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
  chatgpt: 'https://apps.apple.com/us/app/chatgpt/id6448311069',
  netflix: 'https://apps.apple.com/us/app/netflix/id363590051',
  capcut: 'https://apps.apple.com/us/app/capcut-video-editor/id1500855883',
  notion: 'https://apps.apple.com/us/app/notion-notes-docs-tasks/id1235276157',
  discord: 'https://apps.apple.com/us/app/discord-chat-talk-hang-out/id985746746',
  duolingo: 'https://apps.apple.com/us/app/duolingo-language-lessons/id570060128',
  whatsapp: 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997',
};

export const popularApps = [
  { name: 'Spotify', icon: spotify, url: `/results?url=${encodeURIComponent(appStoreUrls.spotify)}` },
  { name: 'ChatGPT', icon: chatgpt, url: `/results?url=${encodeURIComponent(appStoreUrls.chatgpt)}` },
  { name: 'Netflix', icon: netflix, url: `/results?url=${encodeURIComponent(appStoreUrls.netflix)}` },
  { name: 'CapCut', icon: capcut, url: `/results?url=${encodeURIComponent(appStoreUrls.capcut)}` },
  { name: 'Notion', icon: notion, url: `/results?url=${encodeURIComponent(appStoreUrls.notion)}` },
  { name: 'Discord', icon: discord, url: `/results?url=${encodeURIComponent(appStoreUrls.discord)}` },
  { name: 'Duolingo', icon: duolingo, url: `/results?url=${encodeURIComponent(appStoreUrls.duolingo)}` },
  { name: 'WhatsApp', icon: whatsapp, url: `/results?url=${encodeURIComponent(appStoreUrls.whatsapp)}` },
];