import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Head from "../components/helmetHead"
import Header from "../components/headerAndIntro"
import Footer from "../components/footer"
import * as indexStyles from "../styles/Modules/index.module.scss"

const IndexPage = () => {
  const removeAnimation = () => {
    document
      .getElementById("emailAlert")
      .classList.remove(indexStyles.showAnimation)
  }
  const showHiddenInput = () => {
    document
      .getElementById("emailAddressHidden")
      .classList.remove(indexStyles.displayNone)
  }
  const removeHiddenInput = () => {
    document
      .getElementById("emailAddressHidden")
      .classList.add(indexStyles.displayNone)
  }
  const onEmailClick = async () => {
    showHiddenInput() // remove display none from hidden input
    const copyText = document.getElementById("emailAddressHidden") // select hidden input

    copyText.focus() // focus
    copyText.select() // select
    document.execCommand("copy") // copy to clipboard
    removeHiddenInput() // add display none again to remove input
    document
      .getElementById("emailAlert")
      .classList.add(indexStyles.showAnimation) // start animation
    setTimeout(removeAnimation, 3100)
  }

  return (
    <Fragment>
      <Head title="Index" />
      <Header id="top" />
      <main>
        <section className={indexStyles.about} id="about">
          <div className={indexStyles.about_container}>
            <h2
              className={`${indexStyles.header_2} ${indexStyles.u_center} ${indexStyles.u_margin_bottom_huge}`}
            >
              About
            </h2>
            <div className={indexStyles.about_content}>
              <p
                className={`${indexStyles.about_text} ${indexStyles.u_margin_bottom_medium}`}
              >
                STEVE KENYON has performed his original music at the Blue Note,
                Birdland, Carnegie Hall and live on WNYC radio. He plays
                regularly with The NY Philharmonic when saxophones are required,
                and has worked with many other ensembles, from Philip Glass to
                Maria Schneider to The Who. He plays each year for the Tony
                Awards, Kennedy Center Honors and Encores! at NY City Center.
              </p>
              <p
                className={`${indexStyles.about_text} ${indexStyles.u_margin_bottom_medium}`}
              >
                In addition to his compositions for the
                <a
                  href="https://www.nysaxophonequartet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={indexStyles.about_link}
                >
                  NY Saxophone Quartet
                </a>
                , where he plays soprano, his original music is played by the
                NewYorkestra big band and the Pit Stop Players; groups of which
                he is also a member. He has had pieces commissioned by
                Synchronicity, The Triton Brass Quintet, The International
                Double Reed Society and NJCU. Some of his work is published by
                3-2 Music. He was awarded a Downbeat magazine jazz composition
                award as a student.
              </p>
              <p
                className={`${indexStyles.about_text} ${indexStyles.u_margin_bottom_medium}`}
              >
                Currently playing woodwinds at Sunset Boulevard, he can be heard on
                dozens of Broadway albums. Other recordings: his own Fidel’s
                Nightmare, and albums with Audra McDonald, NewYorkestra, Maria
                Schneider, Gil Evans Project, Barbara Cook, Gotham Jazz
                Orchestra, Tony Trishka, Judy Collins, and lots more. Live TV
                includes many Lincoln Center and Kennedy Center events, Sound of
                Music, Peter Pan, Today, Letterman. Other TV - The Marvelous Mrs. Maisel, 
                Schmigadoon, Smash, Ed, Wonder Pets, many jingles. Film - West Side Story 
                (2021, with the NY Philharmonic), Hollywoodland, Hail, Caesar!, 
                and What Just Happened, for which he also wrote some of the orchestrations.
              </p>
              <p className={`${indexStyles.about_text} `}>
                A National Merit Scholar, he has bachelor’s and master’s degrees
                from The University of Miami, and teaches at Hofstra University.
              </p>
              <div className={indexStyles.about_imgContainer}>
                <figure className={indexStyles.about_figure}>
                  <StaticImage
                    className={indexStyles.about_img}
                    src="../images/nyPhilSaxes.jpg"
                    alt="Steve playing saxophone with the NY Phil"
                  />
                  <figcaption className={indexStyles.about_figure_caption}>
                    NY Philharmonic Live from Lincoln Center 2019
                  </figcaption>
                </figure>
                <figure className={indexStyles.about_figure}>
                  <StaticImage
                    className={indexStyles.about_img}
                    src="../images/nysqPerfPhoto1.png"
                    alt="Steve playing saxophone with the NY Saxophone Quartet"
                  />
                  <figcaption className={indexStyles.about_figure_caption}>
                    <a
                      href="http://www.nysaxophonequartet.com/NYSQ/Home.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${indexStyles.about_link} ${indexStyles.about_figure_caption_link}`}
                    >
                      NY Saxophone Quartet
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className={indexStyles.compositions} id="compositions">
          <div className={indexStyles.compositions_container}>
            <h2
              className={`${indexStyles.header_2} ${indexStyles.compositions_header_2} ${indexStyles.u_right} ${indexStyles.u_margin_right} ${indexStyles.u_margin_bottom_huge}`}
            >
              selected compositions
            </h2>
            <figure className={indexStyles.compositions_img_1_container}>
              <StaticImage
                className={indexStyles.compositions_img_1}
                src="../images/composerHeadshot.png"
                alt="Steve by a piano"
              />
            </figure>

            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Saxophone Quartet
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=0INLCobg0pw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Three Intentions
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=pH3VqHZkSFw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A Brief Hello
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>Best of Seven</li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=_oD4q1oX76s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Look Down
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=5_RM60W6EK8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Christmastime is Here (Guaraldi, arr. Kenyon)
                  </a>
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Big Band
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://3-2music.com/shop/sink-or-swim-download-only/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sink or Swim
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  Languid and Bittersweet
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=gBYSPpRkbRk&ab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BlueYorkestra
                  </a>
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Woodwinds
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=d5Te-0lV-rY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elegy (clarinet and piano)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=vgCd1Mdm82E&t=5s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Love Song (clarinet solo)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=G-n_ebittro&t=11s "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Burton Lane Medley (doubling woodwind trio)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=-gffxyCwWFo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Doubler&apos;s Dilemma (doubling woodwind trio)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://youtu.be/QA4wEGr9puQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Day After Yesterday (quintet of woodwind doublers)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                <a
                    className={indexStyles.compositions_a}
                    href="https://youtu.be/nNhJeyWCcDI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Next Day (quintet of woodwind doublers)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                      <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=amFXyrPWV1o"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Day Three (quintet of woodwind doublers)
                  </a>
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} `}
              >
                Saxtet
              </h3>
              <ul className={indexStyles.compositions_ul}>
                  Saxophone quartet plus bass and drums - a new group inspired by all the large and small ensembles I’ve listened to and played with.
              </ul>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=tuFAiiWGx6I"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Not Abuela
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                    Sylvester and John
                </li>
                <li className={indexStyles.compositions_li}>
                    Zane Musa’s Giant Steps Melody (Coltrane/ Musa, arr. Kenyon)
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Other
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=N3LNEyj4GuE "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Das Lied von der Subway (piccolo and tuba)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=FesEy1Kh91k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Death of Webern (violin, viola, cello, bass, piano, drum
                    set)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://youtu.be/EyJxFK5hn6Q?si=EOjTXJtccZiox2y1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Come With Me (piano and percussion)
                  </a>
                </li>
              </ul>
            </div>
          
            <figure className={indexStyles.compositions_img_2_container}>
              <StaticImage
                className={indexStyles.compositions_img_2}
                src="../images/conducting.jpg"
                alt="Steve conducting at a recording session for his piece"
              />
              <figcaption id="contact"></figcaption>
            </figure>
          </div>
        </section>
        <section className={indexStyles.contact}>
          <h3
            className={`${indexStyles.header_3} ${indexStyles.contact_header} `}
          >
            contact me at:
          </h3>
          <button
            onClick={onEmailClick}
            id="email"
            className={`${indexStyles.contact_email}`}
          >
            SteveKenyonMusic@gmail.com
          </button>
          <input
            tabIndex="-1"
            type="text"
            className={`${indexStyles.hideInput} ${indexStyles.displayNone}`}
            id="emailAddressHidden"
            value="SteveKenyonMusic@gmail.com"
            readOnly
          />
          <div className={indexStyles.contact_email_alert} id="emailAlert">
            Email was copied to your clipboard!
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
