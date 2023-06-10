import styles from '../style';
import { footerLinks } from '../constant';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] leading-[24px] text-dimBlack hover:text-secondary cursor-pointer mb-4"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Footer;
