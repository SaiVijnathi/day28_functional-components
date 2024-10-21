import logo from './logo.svg';
import './App.css';
import Actor from './components/Actors';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <h1>Agent sai srinivasa athreya Movie</h1>
      <div className="posterDiv">
      <img src="https://services.brninfotech.com/tws/media2/posters/Agent Sai Srinivasa Athreya.jpg"></img>
      <p><strong>Agent Sai Srinivasa Athreya</strong> is a brilliant, underrated detective from Nellore who runs an agency called FBI which sees no business. He gets more than what he asked for when a case happens to fall right into his lap out of nowhere.\n\nReview: Agent Sai Srinivasa Athreya is a brilliantly executed, no nonsense film which makes it clear from get-go about the kind of story it wants to tell. This is not the kind of film that will pander to a commercial audience, nor is it the kind of film which will allow itself to be diluted with unnecessary tropes. There will be no feel-good moments to make your chest untighten when the gristly core of the story shows it face nor there any relief at the end to make it seem that everything is right in the world. This is exactly why Agent Sai Srinivasa Athreya is the kind of film that needs to be seen with a story that needs to be told.\n\nAgent Athreya (Naveen Polishetty) is a detective grieving his dead mother and running a detective agency called FBI (you will want to watch the film to know why it’s named as such) from a vegetable market in Nellore. In the confines of peeling wall paint and flickering bulbs, Agent Athreya and his assistant Sneha (Sruthi) solve cases that are clearly beneath him, but it’s all he can get. He believes his reputation precedes him and his brilliant yet humorous mind yearns for complicated cases. In midst of an un-ideal situation, Agent Athreya happens to chance upon just that – a heart-wrenching case that’s worth his time if only for the grieving father. But as he begins joining the dots, something far more sinister is unearthed.\n\nAgent Sai Srinivasa Athreya is the kind of film that acts like a slow burn. You go in expecting a few jokes here and there and maybe a case that’s not as complicated as the one you’re shown, but something that our hero manages to solve and save the day. And that’s how it begins too. The film takes its own sweet time giving you details you don’t know you will need later and setting up characters, especially with Agent Athreya’s backstory. The pace honestly makes one impatient and you truly wonder why you’re being given all these details that have nothing to do with the case at hand. But director Swaroop and Naveen (who co-wrote the screenplay) manage to pull the carpet right from under your feet and you’re left wondering what you just played witness to. To reveal anything more about the tale would be a great injustice, for it is something that truly needs to be seen on-screen.\n\nFilms like these – a true-blue detective thriller – are usually let down by loopholes, especially when they’re based on crime that takes place in real life every day. Does Agent Sai Srinivasa Athreya have no loopholes? Maybe it does, but Swaroop and Naveen keep you so busy; you really don’t have time to think about it all, even during the draggy bits. Naveen makes a fantastic debut as a lead with this one and truly seems to live in the skin of his character. There’s not one scene that makes you seem like he’s out of place and while he unsurprisingly aces through the humorous bits, it’s the scenes that require him to show emotion that catches you unaware. Shruti as Sneha is really good, but this is Naveen and his character Athreya’s show all the way. Suhas makes an impressive cameo as Detective Bobby, Athreya’s Tamil counterpart.\n\nWhile Swaroop delivers a sound film, Mark K Robin’s music and Sunny Kurapati’s cinematography help set the mood in many scenes. Watch the film this weekend if no-frills detective thrillers are your cup of tea; watch this one ever more so if you’re jonesing for some for something fresh that’ll make you think. You won’t regret it!"</p>
      </div>

      <div id="video">
      <h2>Movie Trailer</h2>
        <video src="https://services.brninfotech.com/tws/media2/trailers/AgentSaiSrinivasaAthreyaTeaser.mp4" controls autoPlay muted></video>
      </div>

      <div id="actors">
      <h2>Actors</h2>
        <Actor image="./images/actor1.jpg" rname="Naveen Polishetty" cname="Agent Sai Srinivasa Athreya"></Actor>
        <Actor image="./images/actor2.jpg" rname="Shruthi Sharma" cname="Sneha"></Actor>
        <Actor image="./images/actor3.jpg" rname="Suhas" cname="Agent B.V. Subramanya Swami"></Actor>
        <Actor image="./images/actor4.jpg" rname="Shredha" cname="Vasudha"></Actor>
        <Actor image="./images/actor5.jpg" rname="Darbha Appaji" cname="Vasudha's father"></Actor>
        <Actor image="./images/actor6.jpg" rname="Krishneswara Rao" cname="Gopalam"></Actor>
      </div>

      <div className="songs">
      <h2>Songs playlist</h2>
        <p>Elluvochi Godaramma song</p>
        <Song song="https://services.brninfotech.com/tws/media2/songs/AgentSaiSrinivasAthreya/Sherlock Holmes-Naasongs.me.mp3"></Song>
        <p>Odu Odu Aathreya song</p>
        <Song song="https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/02 - Ramuloo Ramulaa.mp3"></Song>
        <p>Thagite Thandanaanam song</p>
        <Song song="https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/03 - OMG Daddy.mp3"></Song>
      </div>

    </div>
  );
}

export default App;
