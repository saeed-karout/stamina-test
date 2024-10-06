import image from '../assets/bg-mixer1.png';
import '../assets/Hero.css';

function ContentBlock({ text, imgPositionClasses, articlePositionClasses }) {
  return (
    <div
      className={`relative text-white opacity-10 transform duration-500 hover:opacity-90 ${imgPositionClasses}`}
    >
      <article className={articlePositionClasses}>{text}</article>
      <img
        src={image}
        className="w-full max-w-[300px] md:max-w-[400px]"
        alt="Descriptive alt text"
      />
    </div>
  );
}

function HeroSection() {
  const contentData = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure, voluptate praesentium eius eos ea maiores dolores voluptatem suscipit neque.',
      imgPositionClasses: 'mx-20',
      articlePositionClasses:
        'absolute -top-20 -left-10 md:-left-40 text-lg md:text-4xl',
    },
    {
      id: 2,
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      imgPositionClasses: '-top-10 md:-top-40',
      articlePositionClasses:
        'absolute -top-16 -left-8 md:-top-28 md:-left-16 text-lg md:text-4xl',
    },
    {
      id: 3,
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.',
      imgPositionClasses: '',
      articlePositionClasses:
        'absolute -top-24 -right-8 md:-top-32 md:-right-16 text-lg md:text-4xl',
    },
  ];

  return (
    <div className="hero flex flex-col justify-around  w-full h-[1100px] bg-secondary dark:bg-secondary">
      <div className="text-white text-center  text-4xl">Sections</div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-y-20 mt-12 px-4 md:px-20">

        {contentData.map((item) => (
          <ContentBlock
            key={item.id}
            text={item.text}
            imgPositionClasses={item.imgPositionClasses}
            articlePositionClasses={item.articlePositionClasses}
          />
        ))}
        
      </div>
    </div>
  );
}

export default HeroSection;
