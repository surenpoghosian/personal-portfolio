import { Projects } from '../types/Project';

export const projects: Projects = {
  scraper: {
    id: 'scraper',
    name: 'Scraper',
    srcURL: { url: 'https://github.com/surenpoghosian/scraper' },
    cover: { srcPath: 'projects/scraper/library.jpg' },
    startDate: '2024-06-06',
    summary: [
      'A modular web scraper with configurable intervals, demonstrating the practical use of Factory, Builder, and Singleton design patterns.',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Web' },
      { name: 'Scraper' },
      { name: 'TypeScript' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: 'scraper',
    },
    achievements: [],
  },
  'code-diagnose': {
    id: 'code-diagnose',
    name: 'code-diagnose',
    srcURL: { url: 'https://github.com/surenpoghosian/code-diagnose' },
    cover: { srcPath: 'projects/code-diagnose/code-doctor.jpg' },
    startDate: '2024-08-23',
    summary: [
      'A tool to analyze project files for software antipatterns.',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Refactoring' },
      { name: 'Typescript' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: 'code-diagnose',
    },
    achievements: [],
  },
  'greedy-kings': {
    id: 'greedy-kings',
    name: 'Greedy Kings - origin',
    srcURL: { url: 'https://github.com/surenpoghosian/TheLongStory' },
    demoURL: { url: 'https://apps.apple.com/am/app/greedy-kings-origin/id6474153745' },
    cover: { srcPath: 'projects/greedy-kings/gdk.jpg' },
    startDate: '2023-09-27',
    summary: [
      'Offline multipplayer built with UIKitDynamics & Swift',
    ],
    tags: [
      { name: 'Software' },
      { name: 'iOS' },
      { name: 'Swift' },
      { name: 'UIKit' },
      { name: 'UIKitDynamics' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: 'TheLongStory',
    },
    achievements: [],
  },
  talkie: {
    id: 'talkie',
    name: 'Talkie',
    srcURL: { url: 'https://github.com/surenpoghosian/TalkieFrontEnd' },
    demoURL: { url: 'https://www.youtube.com/watch?v=GxTYdv1SYeE' },
    cover: { srcPath: 'projects/talkie/screenshot.jpg' },
    startDate: '2023-07-28',
    summary: [
      'Text to Speach web application',
    ],
    tags: [
      { name: 'Software' },
      { name: 'React' },
      { name: 'Python' },
      { name: 'Bark' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: 'TalkieFrontEnd',
    },
    achievements: [],
  },
  'magic-qr': {
    id: 'magic-qr',
    name: 'Magic QR',
    srcURL: { url: 'https://github.com/surenpoghosian/MagicQR' },
    demoURL: { url: 'https://github.com/surenpoghosian/MagicQR' },
    cover: { srcPath: 'projects/magic-qr/qr.jpg' },
    startDate: '2024-01-13',
    summary: [
      'AI based qr code generator',
    ],
    tags: [
      { name: 'Software' },
      { name: 'QR' },
      { name: 'Swift' },
      { name: 'Node' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: 'MagicQR',
    },
    achievements: [],
  },
  'rpi-cluster': {
    id: 'rpi-cluster',
    name: 'Rapsberry Pi cluster',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/rpi-cluster/cover.jpg' },
    startDate: '2024-09-02',
    summary: [
      'A combination of four Raspberry Pi 5s, assembled for scalable system experiments with K3S',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'RaspberryPi5' },
      { name: 'Cluster' },
      { name: 'k3s' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  jetson: {
    id: 'jetson',
    name: 'Computer vision - edge computing',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/jetson/jetson.jpg' },
    startDate: '2024-09-02',
    summary: [
      "Computer Vision with Nvidia's developer kit",
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'Nvidia' },
      { name: 'Computer Vision' },
      { name: 'Jetson' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  NAS: {
    id: 'network-attached-storage',
    name: 'Network Attached Storage (NAS)',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/NAS/raspberry.jpg' },
    startDate: '2024-10-02',
    summary: [
      'Self-made Network Attached Storage based on Raspberry Pi 5 and a 20TB of HDDs',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'NAS' },
      { name: 'HDD' },
      { name: 'RaspberryPi5' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'rack-server-for-experiments': {
    id: 'rack-server-for-experiments',
    name: 'Rack Server for experiments',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/rack-server-for-experiments/cover.jpeg' },
    startDate: '2024-09-02',
    summary: [
      'A combination of rpi cluster, jetson and NAS for experiments...',
    ],
    tags: [
      { name: 'Hardware' },
      { name: 'Rack' },
      { name: 'Experiments' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'fpv-drone': {
    id: 'fpv-drone',
    name: 'FPV racing drone',
    // srcURL: { url: 'https://youtu.be/j8NpvrlGYl8?t=155' },
    cover: { srcPath: 'projects/fpv-drone/drn.jpg' },
    demoURL: { url: 'https://youtu.be/j8NpvrlGYl8?t=155' },
    startDate: '2020-05-01',
    summary: [
      'Self-made FPV racing drone',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'FPV' },
      { name: 'Racing' },
      { name: 'Drone' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'remote-control-arduino': {
    id: 'remote-control-arduino',
    name: 'TV RC + Arduino',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/remote-control-arduino/remote.jpg' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2018/mastering-arduino/#automating-my-table-light-with-arduino-and-bluetooth' },
    startDate: '2018-10-01',
    summary: [
      'remote-control-arduino',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'RC' },
      { name: 'Arduino' },
      { name: 'TV' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'tesla-coil': {
    id: 'tesla-coil',
    name: 'Tesla Coil',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/tesla-coil/coild.png' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2017/tesla-coil/' },
    startDate: '2017-06-01',
    summary: [
      'Self-made Tesla coil',
    ],
    tags: [
      { name: 'Hardware' },
      { name: 'Tesla-Coil' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'laboratory-power-supply-v1': {
    id: 'laboratory-power-supply-v1',
    name: 'Laboratory Power Supply v1',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/laboratory-power-supply-v1/powersupply.jpg' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2019/laboratory-power-supply/#power-supply-1-from-220v-to-15v36v' },
    startDate: '2019-01-10',
    summary: [
      'Self-made laboratory power supply',
    ],
    tags: [
      { name: 'Hardware' },
      { name: 'Laboratory' },
      { name: 'Power-Supply' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'laboratory-power-supply-v2': {
    id: 'laboratory-power-supply-v2',
    name: 'Laboratory Power Supply v2',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/laboratory-power-supply-v2/power.png' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2019/laboratory-power-supply/#power-supply-2-regulating-any-input-to-15v36v' },
    startDate: '2019-01-10',
    summary: [
      'Self-made laboratory power supply',
    ],
    tags: [
      { name: 'Hardware' },
      { name: 'Laboratory' },
      { name: 'Power-Supply' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'bluetooth-arduino': {
    id: 'bluetooth-arduino',
    name: 'Bluetooth + Arduino',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/bluetooth-arduino/bluetooth.png' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2018/mastering-arduino/#automating-my-table-light-with-arduino-and-bluetooth' },
    startDate: '2018-10-01',
    summary: [
      'Arduino controlled over bluetooth and a smart phone',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'Arduino' },
      { name: 'Bluetooth' },
      { name: 'Smartphone' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'door-lock-with-passcode': {
    id: 'door-lock-with-passcode',
    name: 'Smart door lock with passcode',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/door-lock-with-passcode/doorlock.png' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2018/door-lock-with-passcode/' },
    startDate: '2018-11-01',
    summary: [
      'Self-made door lock with passcode based on arduino',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'Arduino' },
      { name: 'Passcode' },
      { name: 'Lock' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'remote-rocket-launcher': {
    id: 'remote-rocket-launcher',
    name: 'Remote controlled rocket (firework) launcher',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/remote-rocket-launcher/rocketlauncher.png' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2018/firework-launcher/#designing-the-remote-controlled-firework-launcher' },
    startDate: '2018-12-01',
    summary: [
      'Firework launcher, made for safely lighting fireworks',
    ],
    tags: [
      { name: 'Hardware' },
      { name: 'Firework' },
      { name: 'Remote-Lighter' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'wired-rocket-launcher': {
    id: 'wired-rocket-launcher',
    name: 'Wired rocket (firework) launcher',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/wired-rocket-launcher/wiredlaunsher.png' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2018/firework-launcher/#designing-the-remote-controlled-firework-launcher' },
    startDate: '2018-12-01',
    summary: [
      'wired-rocket-launcher',
    ],
    tags: [
      { name: 'Hardware' },
      { name: 'Firework' },
      { name: 'Wired-Lighter' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  // 'wifi-jammer': {
  //   id: 'wifi-jammer',
  //   name: 'Wifi jammer',
  //   // srcURL: { url: '' },
  //   cover: { srcPath: 'projects/wifi-jammer/esp8266.jpg' },
  //   startDate: '2019-01-10',
  //   summary: [
  //     'Simple wifi jammer based on ESP32',
  //   ],
  //   tags: [
  //     { name: 'Software' },
  //     { name: 'WiFi' },
  //     { name: 'Jammer' },
  //     { name: 'ESP8266' },
  //   ],
  //   gitHubRepo: {
  //     owner: 'surenpoghosian',
  //     repo: '',
  //   },
  //   achievements: [],
  // },
  'network-attached-watering-system': {
    id: 'network-attached-watering-system',
    name: 'Network attached watering system (LoRa)',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/network-attached-watering-system/LoRaWAN.png' },
    startDate: '2021-07-30',
    summary: [
      'Network attached watering system based on ESP32 and LoRa',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'ESP32' },
      { name: 'LORA' },
      { name: 'Humidity' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'data-corellation-smoothing': {
    id: 'data-corellation-smoothing',
    name: 'Data corellation smoothing',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/data-corellation-smoothing/correlation.jpg' },
    demoURL: { url: 'https://surenpoghosyan.dev/blog/2022/data-corellation-smoothing/' },
    startDate: '2022-01-09',
    summary: [
      'Sensor collected data corellation smoothing methods used for watering system',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Correlation' },
      { name: 'Smoothing' },
      { name: 'Senesor' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'smart-room-controlled-by-alexa': {
    id: 'smart-room-controlled-by-alexa',
    name: 'Smart room',
    cover: { srcPath: 'projects/smart-room/room.jpg' },
    startDate: '2019-12-18',
    summary: [
      'Smart room controlled by amazon alexa',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Selenium' },
      { name: 'Python' },
      { name: 'QT' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'dumb-data-scraper': {
    id: 'dumb-data-scraper',
    name: 'Dumb data scraper',
    cover: { srcPath: 'projects/dumb-data-scraper/monitors.jpeg' },
    startDate: '2020-01-03',
    archived: true,
    summary: [
      'Data scraper with GUI based on python, selenium and qt',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Selenium' },
      { name: 'Python' },
      { name: 'QT' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  'remote-controlled-rgb-lights': {
    id: 'remote-controlled-rgb-lights',
    name: 'Remote controlled RGB lights',
    // srcURL: { url: '' },
    cover: { srcPath: 'projects/remote-controlled-rgb-lights/rgb.png' },
    startDate: '2020-02-10',
    summary: [
      'remote-controlled-rgb-lights',
    ],
    tags: [
      { name: 'Software' },
      { name: 'Hardware' },
      { name: 'Remote' },
      { name: 'RGB' },
      { name: 'ESP32' },
    ],
    gitHubRepo: {
      owner: 'surenpoghosian',
      repo: '',
    },
    achievements: [],
  },
  // '': {
  //   id: '',
  //   name: '',
  //   srcURL: { url: '' },
  //   cover: { srcPath: '' },
  //   startDate: '',
  //   archived: true,
  //   summary: [
  //     '',
  //   ],
  //   tags: [
  //     { name: '' },
  //     { name: '' },
  //     { name: '' },
  //   ],
  //   gitHubRepo: {
  //     owner: 'surenpoghosian',
  //     repo: '',
  //   },
  //   achievements: [],
  // },
};
