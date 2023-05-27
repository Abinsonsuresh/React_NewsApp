import React, { Component } from 'react'
import Newsitem from '../Newsitem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "India Today News Desk",
      "title": "GT vs MI, IPL 2023 Qualifier 2 Live Score and Updates: Gill 129 powers GT to 233 - India Today",
      "description": "GT vs MI, IPL 2023 Qualifier 2 Live Score and Updates: Tilak Varma is on fire as he is bringing back MI's chase back on track. Mumbai were in trouble after losing Rohit Sharma early and Cameron Green to a hand injury. Earlier, Shubman Gill's 129 helped GT pos…",
      "url": "https://www.indiatoday.in/sports/ipl-2023/story/ipl-2023-qualifier-two-gt-vs-mi-live-score-updates-commentary-ahmedabad-hardik-pandya-rohit-sharma-2384878-2023-05-26",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202305/tialakvarma-sixteen_nine.jpg?VersionId=mLEnARZR0_GqzPaVcMvQXaEMk8JJOXZF",
      "publishedAt": "2023-05-26T16:29:00Z",
      "content": "Hello and welcome to the live coverage of the IPL 2023 Qualifier Two clash between GT and MI."
    },


    {
      "source": {
        "id": null,
        "name": "DAWN.com"
      },
      "author": "Dawn.com",
      "title": "Imran's post-arrest medical report says 'under stress with anxiety symptoms' - DAWN.com",
      "description": "Health minister says initial report of Imran's urine sample shows traces of cocaine, alcohol; PTI decides to pursue legal action against claims.",
      "url": "https://www.dawn.com",
      "urlToImage": "https://i.dawn.com/large/2023/05/26175338ebc7a97.jpg?r=185027",
      "publishedAt": "2023-05-26T14:58:59Z",
      "content": "A medical fitness certificate of PTI Chairman Imran Khan, prepared by the Pakistan Institute of Medical Science (Pims) post-arrest and released to the media on Friday, claimed that the former prime m… [+3119 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Watch: A 211-Shot Rally In Badminton - Malaysian Masters Doubles Match Wows The World - NDTV Sports",
      "description": "During a Malaysian Masters doubles match between Malaysia's Pearly Tan/ Thinaah Muralitharan and Rena Miyaura/ Ayako Sakuramoto of Japan in the women's doubles quarterfinals, the 211-shot rally happened",
      "url": "https://sports.ndtv.com/badminton/a-211-shot-rally-in-badminton-malaysian-masters-doubles-match-wows-the-world-watch-4069574",
      "urlToImage": "https://c.ndtvimg.com/2023-05/o2vtk15_pearly-tan-thinaah-muralitharan_625x300_26_May_23.jpg",
      "publishedAt": "2023-05-26T14:28:38Z",
      "content": "A long rally in badminton is a sight to behold. With the shuttle rebounding at break-neck speed off the racquets, it makes for a great viewing for the spectators and it can leave the best of stars da… [+1880 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Bar & Bench - Indian Legal News"
      },
      "author": "Bar & Bench",
      "title": "Central government notifies appointment of Justice SV Gangapurwala as Chief Justice of Madras High Court - Bar & Bench - Indian Legal News",
      "description": "The Central government on Friday cleared the appointment of Acting Chief Justice of the Bombay High Court&nbsp;SV Gangapurwala&nbsp;as Chief Justice of the Madr",
      "url": "https://www.barandbench.com/news/litigation/central-government-notifies-appointment-of-justice-sv-gangapurwala-as-chief-justice-of-madras-high-court-2",
      "urlToImage": "https://gumlet.assettype.com/barandbench%2F2023-04%2F4679f25a-7a4f-414d-a1ee-f8094aff4389%2F49.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
      "publishedAt": "2023-05-26T14:09:24Z",
      "content": "A notification in this regard was issued by the Union Ministry of Law &amp; Justice.\r\n\"In exercise of the power conferred by clause (1) of Article 217 of the Constitution of India, the President is p… [+221 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "Aneesha Mathur",
      "title": "NIA moves Delhi High Court seeking death sentence for Kashmiri separatist Yasin Malik - India Today",
      "description": "The National Investigation Agency (NIA) on Friday moved the Delhi High Court seeking a death sentence for Kashmiri separatist leader Yasin Malik.",
      "url": "https://www.indiatoday.in/law/story/nia-moves-delhi-high-court-seeking-death-sentence-for-yasin-malik-2384921-2023-05-26",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/assets/202305/Yasin%20Malik-original--sixteen_nine.jpg?VersionId=wGMb.b0syp.JEeQsx9z2VMiRrM1oLEGW",
      "publishedAt": "2023-05-26T14:03:07Z",
      "content": "By Aneesha Mathur, Nalini Sharma: The National Investigation Agency (NIA) on Friday moved the Delhi High Court seeking a death sentence for Kashmiri separatist leader Yasin Malik.\r\nNIA had sought a d… [+1005 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PINKVILLA"
      },
      "author": "Lubna Khan",
      "title": "Ashish Vidyarthi posts VIDEO after marriage to Rupali Barua; Shares why he wanted to get married post divorce - PINKVILLA",
      "description": "After His Marriage With Rupali Barua, Ashish Vidyarthi Posted A Video In Which He Shared That He Parted Ways With Ex-wife Piloo Vidyarthi Amicably, And Why He Wanted To Get Married Again.",
      "url": "https://www.pinkvilla.com/entertainment/news/ashish-vidyarthi-posts-video-after-marriage-to-rupali-barua-shares-why-he-wanted-to-get-married-post-divorce-1222970",
      "urlToImage": "https://www.pinkvilla.com/english/images/2023/05/1963275871_ashish-vidyarthi-posts-video-after-marriage-to-rupali-barua-shares-why-he-wanted-to-get-married-post-divorce-1_1280*720.jpg",
      "publishedAt": "2023-05-26T13:59:54Z",
      "content": "Veteran actor Ashish Vidyarthi got married for the second time yesterday. He tied the knot with fashion entrepreneur Rupali Barua in Kolkata, on Thursday, and pictures from their intimate wedding wen… [+2592 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ZME Science"
      },
      "author": "Tibi Puiu",
      "title": "Hubble finds ultra-rare black hole lurking in massive star cluster - ZME Science",
      "description": "An intermediate-sized black hole hidden in the core of a nearby globular star cluster may be the missing link astronomers have been waiting for.",
      "url": "https://www.zmescience.com/science/news-science/rare-intermediate-black-hole-found-hubble/",
      "urlToImage": "https://cdn.zmescience.com/wp-content/uploads/2023/05/image_6117_1e-Intermediate-Mass-Black-Hole.jpg",
      "publishedAt": "2023-05-26T13:50:57Z",
      "content": "Up to now, intermediate black holes were largely a theoretical construct. But the newly identified black hole serves as the best evidence yet that such highly rare intermediate-sized black holes exis… [+5706 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Vaibhavi Upadhyaya's fiancé Jay Gandhi claims they were wearing seat belts - Hindustan Times",
      "description": "Vaibhavi Upadhyaya's fiancé Jay Gandhi refuted claims that they weren't wearing seat belts. She died after the car fell down a valley in Himachal on May 22.",
      "url": "https://www.hindustantimes.com/entertainment/tv/vaibhavi-upadhyaya-fianc-jay-gandhi-says-they-were-wearing-seat-belts-101685106490425.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/26/1600x900/311044957_637835947858609_8915104178601546831_n_1685106743415_1685106763126.jpg",
      "publishedAt": "2023-05-26T13:43:12Z",
      "content": "The fiancé of late actor Vaibhavi Upadhyaya, Jay Gandhi, said on Friday that they were wearing seat belts when the accident occurred. He also stated they were not speeding and the car was standing st… [+2066 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Consuming Too Much Zinc Can Cause Health Issues; Here's Why & How To Prevent It - NDTV",
      "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      "url": "https://www.ndtv.com/news",
      "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
      "publishedAt": "2023-05-26T13:31:22Z",
      "content": "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world."
    },

    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express Web Desk",
      "title": "‘Hiking with my sons’: Former Pakistan PM Imran Khan on what he misses these days - The Indian Express",
      "description": "Imran Khan said that he wants to make Pakistan the skiing capital of the world",
      "url": "https://indianexpress.com/article/pakistan/hiking-former-pakistan-pm-imran-khan-8630908/",
      "urlToImage": "https://images.indianexpress.com/2023/05/Imran-Khan-9.jpg",
      "publishedAt": "2023-05-26T12:55:42Z",
      "content": "Former Pakistan prime minister Imran Khan, who has been at loggerheads with the present government of the country and is facing multiple cases following the violence after he was arrested on May 9, r… [+1644 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Maheq Saikia",
      "title": "OpenAI's ChatGPT IOS app is now available in 32 countries including India | Mint - Mint",
      "description": "Open AI's ChatGPT IOS app has expanded its availability to 32 countries including India and European nations after only a week of its initial launch in the United States.",
      "url": "https://www.livemint.com/technology/openais-chatgpt-ios-app-is-now-available-in-32-countries-including-india-11685103709298.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/26/600x338/USA-STOCKS-AI-0_1685072516118_1685104773641.JPG",
      "publishedAt": "2023-05-26T12:47:45Z",
      "content": "In the first 6 days since of its initial launch in the United States on May 18, the ChatGPT mobile app crossed the half a million downloads mark, making it one of the highest-performing new apps, out… [+1973 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Sreelakshmi B",
      "title": "PM Modi to inaugurate new parliament building on Sunday. Here's the first look - Hindustan Times",
      "description": "The new parliament building can accommodate 888 members in the chamber of the lower house, and 300 in a separate chamber for the upper house. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/pm-modi-to-inaugurate-new-parliament-building-on-sunday-heres-the-first-look-101685101548383.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/26/1600x900/PTI05-26-2023-000129B-0_1685103905946_1685103929717.jpg",
      "publishedAt": "2023-05-26T12:29:20Z",
      "content": "Prime Minister Narendra Modi and Lok Sabha Speaker Om Birla will inaugurate the new parliament building in Delhi on Sunday. Though the details regarding the inauguration have not been made public by … [+1327 chars]"
    },


    {
      "source": {
        "id": null,
        "name": "Bar & Bench - Indian Legal News"
      },
      "author": "Prashant Jha",
      "title": "What action have you taken against man who made hate speech against Mohammed Zubair? Delhi High Court to Delhi Police - Bar & Bench - Indian Legal News",
      "description": "The Delhi High Court Friday pulled up the Delhi Police for its failure to take any action against one Jagdish Singh who allegedly made a hate speech against Alt",
      "url": "https://www.barandbench.com/news/litigation/what-action-taken-man-made-hate-speech-against-mohammed-zubair-delhi-high-court-delhi-police",
      "urlToImage": "https://gumlet.assettype.com/barandbench%2F2022-06%2F6a635792-e730-44e0-9b4b-1bee339b48aa%2F14.jpg?rect=0%2C0%2C1600%2C840&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
      "publishedAt": "2023-05-26T12:11:04Z",
      "content": "The Court made the observations while hearing a petition by Zubair seeking quashing of the FIR registered against him. \r\nThe incident dates back to 2020 when Zubair in his tweet, had called out Singh… [+831 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Twitter's Top Engineer Quits After Ron DeSantis Livestream Mishap - NDTV",
      "description": "Following a Twitter livestream mishap, the Florida Governor's bid for the presidency in 2024 was plagued by technical difficulties.",
      "url": "https://www.ndtv.com/feature/twitters-top-engineer-quits-after-ron-desantis-us-presidential-campaign-glitch-4069029",
      "urlToImage": "https://i.ndtvimg.com/i/2016-04/twitter-logo_650x400_41460921607.jpg",
      "publishedAt": "2023-05-26T12:10:43Z",
      "content": "Mr Dabiri said that he had witnessed \"two distinct eras\" at the company.\r\nTwitter's Engineering Chief Foad Dabiri has resigned from the company after the launch of Governor of Florida Ron DeSantis' U… [+3014 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Odishatv.in"
      },
      "author": "IANS",
      "title": "Salman Khan's brother-in-law gets court notice over 'Ruslaan' title - OTV News",
      "description": "Satyabrata Panda, Additional District Judge, Patiala House Court, while hearing the plea, issued a notice to all the defendants and asked them to file a reply within one week.",
      "url": "https://odishatv.in/news/entertainment/salman-khan-s-brother-in-law-gets-court-notice-over-ruslaan-title-205308",
      "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1685102118.webp",
      "publishedAt": "2023-05-26T11:58:45Z",
      "content": "A Delhi court on Friday issued a notice to Bollywood actor Salman Khan's brother-in-law and actor Ayush Sharma, producer K. K. Radhamohan and South Indian actor Jagpathi Babu after hearing a plea aga… [+1125 chars]"
    }
  ]
  constructor(){
    super();
    console.log("Hello iam a constructer from news")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return    <div className="col-md-3" key={element.url}>
            <Newsitem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgurl={element.urlToImage} newsurl={element.url}/>
          </div>
 
        })}
 

        </div>
      </div>
    )
  }
}
