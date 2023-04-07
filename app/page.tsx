'use client';
import { useState } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import papersData from './papers.json';

export const dynamic = 'force-dynamic';

const users = [
  {
    id: 1,
    userName: 'sheintze0',
    name: 'Sabina Heintze',
    email: 'sheintze0@uiuc.edu'
  },
  {
    id: 2,
    userName: 'krendbaek1',
    name: 'Kellen Rendbaek',
    email: 'krendbaek1@marketwatch.com'
  },
  {
    id: 3,
    userName: 'hdonet2',
    name: 'Halette Donet',
    email: 'hdonet2@prweb.com'
  },
  {
    id: 4,
    userName: 'kmclellan3',
    name: 'Kellen McLellan',
    email: 'kmclellan3@github.io'
  },
  {
    id: 5,
    userName: 'abertelet4',
    name: 'Aggi Bertelet',
    email: 'abertelet4@foxnews.com'
  },
  {
    id: 6,
    userName: 'cgiroldo5',
    name: 'Cheslie Giroldo',
    email: 'cgiroldo5@bravesites.com'
  },
  {
    id: 7,
    userName: 'gbalsillie6',
    name: 'Geoffry Balsillie',
    email: 'gbalsillie6@elegantthemes.com'
  },
  {
    id: 8,
    userName: 'sbamford7',
    name: 'Sheffield Bamford',
    email: 'sbamford7@infoseek.co.jp'
  },
  {
    id: 9,
    userName: 'hflorentine8',
    name: 'Hedi Florentine',
    email: 'hflorentine8@disqus.com'
  },
  {
    id: 10,
    userName: 'cofer9',
    name: 'Chelsey Ofer',
    email: 'cofer9@engadget.com'
  },
  {
    id: 11,
    userName: 'eallmarka',
    name: 'Enrika Allmark',
    email: 'eallmarka@blog.com'
  },
  {
    id: 12,
    userName: 'mimmsb',
    name: 'Marven Imms',
    email: 'mimmsb@photobucket.com'
  },
  {
    id: 13,
    userName: 'rtreasurec',
    name: 'Reinhold Treasure',
    email: 'rtreasurec@ucoz.ru'
  },
  {
    id: 14,
    userName: 'wbalhatchetd',
    name: 'Woodrow Balhatchet',
    email: 'wbalhatchetd@house.gov'
  },
  {
    id: 15,
    userName: 'scurwene',
    name: 'Sven Curwen',
    email: 'scurwene@sakura.ne.jp'
  },
  {
    id: 16,
    userName: 'polyetf',
    name: 'Patten Olyet',
    email: 'polyetf@nhs.uk'
  },
  {
    id: 17,
    userName: 'ffredig',
    name: 'Flora Fredi',
    email: 'ffredig@amazon.de'
  },
  {
    id: 18,
    userName: 'mcliburnh',
    name: 'Mason Cliburn',
    email: 'mcliburnh@guardian.co.uk'
  },
  {
    id: 19,
    userName: 'ddelvesi',
    name: 'Dulce Delves',
    email: 'ddelvesi@nhs.uk'
  },
  {
    id: 20,
    userName: 'lguynemerj',
    name: 'Larine Guynemer',
    email: 'lguynemerj@eventbrite.com'
  },
  {
    id: 21,
    userName: 'azanardiik',
    name: 'Andris Zanardii',
    email: 'azanardiik@cam.ac.uk'
  },
  {
    id: 22,
    userName: 'cairyl',
    name: 'Coletta Airy',
    email: 'cairyl@amazon.co.uk'
  },
  {
    id: 23,
    userName: 'ccallm',
    name: 'Colby Call',
    email: 'ccallm@utexas.edu'
  },
  {
    id: 24,
    userName: 'bglavisn',
    name: 'Barde Glavis',
    email: 'bglavisn@sfgate.com'
  },
  {
    id: 25,
    userName: 'jmulqueeno',
    name: 'Judon Mulqueen',
    email: 'jmulqueeno@wp.com'
  },
  {
    id: 26,
    userName: 'cscholeyp',
    name: 'Clarence Scholey',
    email: 'cscholeyp@oakley.com'
  },
  {
    id: 27,
    userName: 'cscollickq',
    name: 'Connie Scollick',
    email: 'cscollickq@sfgate.com'
  },
  {
    id: 28,
    userName: 'wbeckmannr',
    name: 'Wilek Beckmann',
    email: 'wbeckmannr@admin.ch'
  },
  {
    id: 29,
    userName: 'ppetchers',
    name: 'Peg Petcher',
    email: 'ppetchers@yandex.ru'
  },
  {
    id: 30,
    userName: 'lellikert',
    name: 'Laurel Elliker',
    email: 'lellikert@desdev.cn'
  },
  {
    id: 31,
    userName: 'ksangsteru',
    name: 'Kylie Sangster',
    email: 'ksangsteru@hatena.ne.jp'
  },
  {
    id: 32,
    userName: 'hmoniniv',
    name: 'Harli Monini',
    email: 'hmoniniv@techcrunch.com'
  },
  {
    id: 33,
    userName: 'kbulchw',
    name: 'Kilian Bulch',
    email: 'kbulchw@w3.org'
  },
  {
    id: 34,
    userName: 'dreussx',
    name: 'Derk Reuss',
    email: 'dreussx@china.com.cn'
  },
  {
    id: 35,
    userName: 'ceversony',
    name: 'Corrie Everson',
    email: 'ceversony@newyorker.com'
  },
  {
    id: 36,
    userName: 'jubsdalez',
    name: 'Jule Ubsdale',
    email: 'jubsdalez@moonfruit.com'
  },
  {
    id: 37,
    userName: 'zsieur10',
    name: 'Zita Sieur',
    email: 'zsieur10@auda.org.au'
  },
  {
    id: 38,
    userName: 'rcutress11',
    name: 'Rosie Cutress',
    email: 'rcutress11@sina.com.cn'
  },
  {
    id: 39,
    userName: 'brielly12',
    name: 'Barry Rielly',
    email: 'brielly12@rakuten.co.jp'
  },
  {
    id: 40,
    userName: 'pparagreen13',
    name: 'Peg Paragreen',
    email: 'pparagreen13@1und1.de'
  },
  {
    id: 41,
    userName: 'landerl14',
    name: 'Larisa Anderl',
    email: 'landerl14@nih.gov'
  },
  {
    id: 42,
    userName: 'dmacdavitt15',
    name: 'Dee MacDavitt',
    email: 'dmacdavitt15@vinaora.com'
  },
  {
    id: 43,
    userName: 'akarolewski16',
    name: 'Adora Karolewski',
    email: 'akarolewski16@nbcnews.com'
  },
  {
    id: 44,
    userName: 'dmillthorpe17',
    name: 'Donielle Millthorpe',
    email: 'dmillthorpe17@twitpic.com'
  },
  {
    id: 45,
    userName: 'mbahike18',
    name: 'Merrel Bahike',
    email: 'mbahike18@wordpress.com'
  },
  {
    id: 46,
    userName: 'jbeckford19',
    name: 'Jonas Beckford',
    email: 'jbeckford19@twitter.com'
  },
  {
    id: 47,
    userName: 'rgopsill1a',
    name: 'Rex Gopsill',
    email: 'rgopsill1a@live.com'
  },
  {
    id: 48,
    userName: 'fdanev1b',
    name: 'Farley Danev',
    email: 'fdanev1b@canalblog.com'
  },
  {
    id: 49,
    userName: 'ldranfield1c',
    name: 'Livia Dranfield',
    email: 'ldranfield1c@smugmug.com'
  },
  {
    id: 50,
    userName: 'swarwicker1d',
    name: 'Sharl Warwicker',
    email: 'swarwicker1d@i2i.jp'
  },
  {
    id: 51,
    userName: 'rneville1e',
    name: 'Ricki Neville',
    email: 'rneville1e@mediafire.com'
  },
  {
    id: 52,
    userName: 'esuerz1f',
    name: 'Emlynne Suerz',
    email: 'esuerz1f@wikimedia.org'
  },
  {
    id: 53,
    userName: 'cnorfolk1g',
    name: 'Cary Norfolk',
    email: 'cnorfolk1g@gnu.org'
  },
  {
    id: 54,
    userName: 'ojochens1h',
    name: 'Olenolin Jochens',
    email: 'ojochens1h@economist.com'
  },
  {
    id: 55,
    userName: 'ldutton1i',
    name: 'Livvy Dutton',
    email: 'ldutton1i@tiny.cc'
  },
  {
    id: 56,
    userName: 'sduffyn1j',
    name: 'Son Duffyn',
    email: 'sduffyn1j@e-recht24.de'
  },
  {
    id: 57,
    userName: 'cbeagin1k',
    name: 'Cybill Beagin',
    email: 'cbeagin1k@phpbb.com'
  },
  {
    id: 58,
    userName: 'lgipps1l',
    name: 'Leland Gipps',
    email: 'lgipps1l@sakura.ne.jp'
  },
  {
    id: 59,
    userName: 'adruhan1m',
    name: 'Andres Druhan',
    email: 'adruhan1m@etsy.com'
  },
  {
    id: 60,
    userName: 'mharnwell1n',
    name: 'Margalit Harnwell',
    email: 'mharnwell1n@who.int'
  },
  {
    id: 61,
    userName: 'wmelladew1o',
    name: 'Wallace Melladew',
    email: 'wmelladew1o@furl.net'
  },
  {
    id: 62,
    userName: 'ainnocent1p',
    name: 'Anna-diana Innocent',
    email: 'ainnocent1p@webs.com'
  },
  {
    id: 63,
    userName: 'dmillions1q',
    name: 'Damaris Millions',
    email: 'dmillions1q@netlog.com'
  },
  {
    id: 64,
    userName: 'hgall1r',
    name: 'Hurleigh Gall',
    email: 'hgall1r@woothemes.com'
  },
  {
    id: 65,
    userName: 'hennever1s',
    name: 'Huntley Ennever',
    email: 'hennever1s@eepurl.com'
  },
  {
    id: 66,
    userName: 'wstubs1t',
    name: 'Welbie Stubs',
    email: 'wstubs1t@networksolutions.com'
  },
  {
    id: 67,
    userName: 'ptreadgold1u',
    name: 'Pepi Treadgold',
    email: 'ptreadgold1u@dedecms.com'
  },
  {
    id: 68,
    userName: 'cheistermann1v',
    name: 'Cacilie Heistermann',
    email: 'cheistermann1v@dedecms.com'
  },
  {
    id: 69,
    userName: 'ffandrey1w',
    name: 'Flynn Fandrey',
    email: 'ffandrey1w@de.vu'
  },
  {
    id: 70,
    userName: 'edyke1x',
    name: 'Elnora Dyke',
    email: 'edyke1x@ehow.com'
  },
  {
    id: 71,
    userName: 'glouw1y',
    name: 'Genny Louw',
    email: 'glouw1y@rambler.ru'
  },
  {
    id: 72,
    userName: 'sblyth1z',
    name: 'Shell Blyth',
    email: 'sblyth1z@google.it'
  },
  {
    id: 73,
    userName: 'sreddecliffe20',
    name: 'Sharline Reddecliffe',
    email: 'sreddecliffe20@hatena.ne.jp'
  },
  {
    id: 74,
    userName: 'pmowsley21',
    name: 'Purcell Mowsley',
    email: 'pmowsley21@theglobeandmail.com'
  },
  {
    id: 75,
    userName: 'nwardington22',
    name: 'Nanice Wardington',
    email: 'nwardington22@theglobeandmail.com'
  },
  {
    id: 76,
    userName: 'kyurchenko23',
    name: 'Kellen Yurchenko',
    email: 'kyurchenko23@angelfire.com'
  },
  {
    id: 77,
    userName: 'asmither24',
    name: 'Ambrosius Smither',
    email: 'asmither24@fema.gov'
  },
  {
    id: 78,
    userName: 'lchessun25',
    name: 'Loralee Chessun',
    email: 'lchessun25@samsung.com'
  },
  {
    id: 79,
    userName: 'lmolines26',
    name: 'Laverna Molines',
    email: 'lmolines26@spiegel.de'
  },
  {
    id: 80,
    userName: 'asherrett27',
    name: 'Alena Sherrett',
    email: 'asherrett27@jalbum.net'
  },
  {
    id: 81,
    userName: 'bgilling28',
    name: 'Bella Gilling',
    email: 'bgilling28@cnbc.com'
  },
  {
    id: 82,
    userName: 'tpercifer29',
    name: 'Theadora Percifer',
    email: 'tpercifer29@china.com.cn'
  },
  {
    id: 83,
    userName: 'mcasacchia2a',
    name: 'Madelena Casacchia',
    email: 'mcasacchia2a@yahoo.com'
  },
  {
    id: 84,
    userName: 'amcilvenna2b',
    name: 'Anne-marie McIlvenna',
    email: 'amcilvenna2b@cpanel.net'
  },
  {
    id: 85,
    userName: 'npitkethly2c',
    name: 'Nowell Pitkethly',
    email: 'npitkethly2c@techcrunch.com'
  },
  {
    id: 86,
    userName: 'jpitbladdo2d',
    name: 'Justinian Pitbladdo',
    email: 'jpitbladdo2d@bbc.co.uk'
  },
  {
    id: 87,
    userName: 'lkeneleyside2e',
    name: 'Lock Keneleyside',
    email: 'lkeneleyside2e@ihg.com'
  },
  {
    id: 88,
    userName: 'acharnock2f',
    name: 'Anabel Charnock',
    email: 'acharnock2f@paginegialle.it'
  },
  {
    id: 89,
    userName: 'eekins2g',
    name: 'Elvis Ekins',
    email: 'eekins2g@soup.io'
  },
  {
    id: 90,
    userName: 'nbresland2h',
    name: 'Nikkie Bresland',
    email: 'nbresland2h@ifeng.com'
  },
  {
    id: 91,
    userName: 'lgregs2i',
    name: 'Livvie Gregs',
    email: 'lgregs2i@google.es'
  },
  {
    id: 92,
    userName: 'ualbasini2j',
    name: 'Ulrick Albasini',
    email: 'ualbasini2j@state.gov'
  },
  {
    id: 93,
    userName: 'squipp2k',
    name: 'Standford Quipp',
    email: 'squipp2k@t-online.de'
  },
  {
    id: 94,
    userName: 'jbenedidick2l',
    name: 'Jacquenetta Benedidick',
    email: 'jbenedidick2l@sitemeter.com'
  },
  {
    id: 95,
    userName: 'nvlasyuk2m',
    name: 'Novelia Vlasyuk',
    email: 'nvlasyuk2m@t-online.de'
  },
  {
    id: 96,
    userName: 'atucknutt2n',
    name: 'Anneliese Tucknutt',
    email: 'atucknutt2n@webmd.com'
  },
  {
    id: 97,
    userName: 'hrobardley2o',
    name: 'Hewett Robardley',
    email: 'hrobardley2o@rediff.com'
  },
  {
    id: 98,
    userName: 'ccristoforetti2p',
    name: 'Carilyn Cristoforetti',
    email: 'ccristoforetti2p@biglobe.ne.jp'
  },
  {
    id: 99,
    userName: 'ppickthorn2q',
    name: 'Perrine Pickthorn',
    email: 'ppickthorn2q@dagondesign.com'
  },
  {
    id: 100,
    userName: 'dvickerman2r',
    name: 'Drugi Vickerman',
    email: 'dvickerman2r@buzzfeed.com'
  }
];

const messages = [
  {
    id: 1,
    title: 'Velit placeat sit ducimus non sed',
    author: 'Gloria Roberston',
    topic: '5 documents',
    datetime: '2021-01-27T16:35',
    excerpt:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
  },
  {
    id: 2,
    title: 'Velit placeat sit ducimus non sed',
    author: 'Gloria Roberston',
    topic: 'Artificial Intelligence',
    datetime: '2021-01-27T16:35',
    excerpt:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
  },
  {
    id: 3,
    title: 'Velit placeat sit ducimus non sed',
    author: 'Gloria Roberston',
    topic: 'Virtual Machines',
    datetime: '2021-01-27T16:35',
    excerpt:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.'
  }
  // More messages...
];

const TopicCard = ({
  title,
  excerpt,
  author,
  count = '',
  topic = '',
  parentTopic = ''
}) => (
  <Card className="">
    <div className="flex justify-between space-x-3">
      <div className="min-w-0 flex-1">
        <a href="#" className="block focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="truncate text-sm font-medium text-zinc-900 capitalize">
            {topic.split('_').join(' ')}
          </p>
          <p className="truncate text-sm text-zinc-500">{`${count} document(s)`}</p>
        </a>
      </div>
      <span className="capitalize flex-shrink-0 whitespace-nowrap text-sm text-zinc-500">
        {parentTopic.split('_').join(' ')}
      </span>
    </div>
    <div className="mt-1">
      <p className="line-clamp-2 text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fuga
        fugit.
      </p>
    </div>
  </Card>
);
const IndexPage = () => {
  const [cursor, setCursor] = useState(0);
  const MAX_RESULTS_PER_PAGE = 8;
  return (
    <main className="p-4 md:p-10 mx-auto max-w-6xl">
      <div className="flex gap-x-8 items-baseline w-full justify-between">
        <div>
          <Title>Papers</Title>
          <Text>
            A list of users retrieved from a MySQL database (PlanetScale).
          </Text>
        </div>
        <Search />
      </div>
      <ul role="list" className="grid grid-cols-3 gap-4 mt-6">
        {papersData['files'].slice(cursor, MAX_RESULTS_PER_PAGE).map((file) => (
          <TopicCard topic={file} />
        ))}
      </ul>
      <nav
        className="hidden flex items-center justify-between  py-3"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            onClick={() => setCursor(cursor - MAX_RESULTS_PER_PAGE)}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </button>
          <button
            onClick={() => setCursor(cursor + MAX_RESULTS_PER_PAGE)}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </button>
        </div>
      </nav>
    </main>
  );
};
export default IndexPage;
