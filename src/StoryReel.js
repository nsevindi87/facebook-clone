import Story from './Story';
import Profile1 from './img/profile 1.jpeg'
import Profile2 from './img/profile 2.jpeg'
import Profile3 from './img/profile 3.jpeg'
import Profile4 from './img/profile 4.jpeg'
import Profile5 from './img/profile 5.jpeg'
import Background1 from './img/Download (1).jpeg'
import Background2 from './img/Download (2).jpeg'
import Background3 from './img/Download (3).jpeg'
import Background4 from './img/Download (4).jpeg'
import Background5 from './img/Download (5).jpeg'


function StoryReel() {
  return (
    <div className='storyreel'>
        <h4>storyreel</h4>
        <Story title="george Orwel"
               profileSrc={Profile1}
               image={Background1} />

        <Story title="Thomas Edison"
               profileSrc={Profile2}
               image={Background2} />
               
        <Story title="Andrea Müller"
               profileSrc={Profile3}
               image={Background3} />

        <Story title="Sandra Klara"
               profileSrc={Profile4}
               image={Background4} />

        <Story title="Claudia Andre"
               profileSrc={Profile5}
               image={Background5} />
                
    </div>
  )
}

export default StoryReel
