var cfUtil = require('aws-cloudfront-sign');

// Sample private key. This would need to be replaced with the private key from
// your CloudFront key pair.
var cfPk =
'-----BEGIN RSA PRIVATE KEY-----\n' +
'MIIEowIBAAKCAQEAg5esWfHu+f/tBMTqYrR2F12OF6JGqo6Y7ckxAcjLmkhktzm4\n' +
'wniiCI4XoBB4v8+LBd8PrBu8PBy7HqWHywC7epBNPY7z1CouG4H80mdWKzSL5PAz\n' +
'wiDaF2c5wWcf5Czz3m36zs3+//ftOpPAgCXsTBjSGhbl5W1RFGGdI0ccyxj7zEJO\n' +
'VWoAIepW6dLdC1wxD6Qykr3yPXGSUaj3w12lpIdDgknuT6+LvlZsvGC4gKNecrZS\n' +
'USRwRgNMjf9S69Rv1rWLh8+KjktAn8s3BfSxDFpcey0w+qYLXsjREdypLwRconUI\n' +
'XVP8ZNEVZkoklckSQDtRAr4hzIGk7VJ0xT2iSQIDAQABAoIBAAsrhcLAyZNJCRp9\n' +
'iJPGU7vaAiS5bpwtrIeKq3FGVRoMiRgQe0Fusfpd7V116HoHqPpfm9n1JL5Jhgys\n' +
'6mDt9/wIYbYW+1WIGw/Usdw+T08tj65oQUx6M2kHJxzmnwtkUXMRDNgfHkUmC2oM\n' +
'fquiDHPNK5BxXyRhah97xbXn5GbM4d+3xFbGZB2TSF29SOctoXEydHV7+zdzvtNQ\n' +
'X5Ibees3x8R8Cf2nyrhgMJ4Rv6HktGMBE3I2hpePzrrlyjmy9fgrR6UlnCnJylYX\n' +
'YdqweEMnjc6En5T7bZ0P2niD2vnFtSzW8F5UzL31LSazM0/43Ib0zu+kQmyKQSqW\n' +
'TcgztS0CgYEAxFu0D8pMo7Md68x2K2znTSgY3OqcU0wJ5rD270rhILZuOej7T7NS\n' +
'83kWD4wdI/zxOfsizW2ZCYi5/sEzvjq05YZMflzf1yeK1O/Qac8rRp6bObkvjY9g\n' +
'G4C2KfAFnLcQK6aUkzaP6oPY00HxBZQPhasXnlyvttK+qOOx5MmUNLsCgYEAq4/0\n' +
'6Jos1Ak3vGHOspwtWWWvbcXuUv4nXrp04Ul0GMFKL41CW1iWMUYVeal1naR9zoSr\n' +
'kOLmzX6LgsfY66Tfrp3ZBcj/YPbWUdSfjL0xAVcRaxhktv63KSNDUNSyw4Ao4n9Y\n' +
'jk+fWAWapu2GLCj4bui9RBeHThXY/qr96qlzVssCgYAVOMAGMNwFmTczo95lpRh+\n' +
'i0XconKQwhgT2a5mgFZCfdT950M6AuyFKeILfh4sJItBs/W39A9lK2TGtsTL23Zv\n' +
'lAsyYQFENJ7Zkq2Yse5AbKXkIDKWfxdpAYkukSVaIaLaxN8r5eq58tP9SRQugSkI\n' +
'Tkx4LhZDkRVQFYPFcU/WPwKBgATFBcwJrUFf2DrWhUaV7PTVTOFCZXPNOQ77JBC3\n' +
'WBDwHr3fsX6UoehQyHwPaAOv9QduzM5EYKJJ6FsEb1VtygIyxTvR8LejZSX1QVJK\n' +
'WDhvUT6m+PXVcwYjwtVWdHnW8EwLukyKjiWGUlxdsiM8KFv9AHYKKWrUVKoP2utR\n' +
'NrGtAoGBAIVa0xlM1780j9zx9HkdbRdSf5B6hYG8wYnJafgGWehqUC33nDktjGwk\n' +
'Kxq9REeR94h5DofS2Y+erylUPKVcXkYewVLcYH5rg5XMIZbD1VY+/qmRSqqVXSeI\n' +
'TXQPLP37fDCfVvs12KygdIz0NHsKsTgltwBkAuy301pQtMSd4wzb\n' +
'-----END RSA PRIVATE KEY-----'

// Sample key pair ID. This would need to be replaced by the Access Key ID from
// your CloudFront key pair.
var cfKeypairId = 'APKAITDBJOSZILKFRADQ';
var cfURL = 'http://d10n1fj1bacjeh.cloudfront.net/path/to/s3/leg.mp4';


var today = new Date();

var signedUrl = cfUtil.getSignedUrl(cfURL, {
  keypairId: cfKeypairId,
  expireTime: Date.now()+ 600000000000,
  privateKeyString: cfPk
});
console.log(signedUrl);
