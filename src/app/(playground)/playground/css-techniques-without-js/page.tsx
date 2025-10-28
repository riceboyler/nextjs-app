/** biome-ignore-all lint/performance/noImgElement: <explanation> */
import React from "react";

export default function Page() {
  return (
    <div className="wrapper">
      <header>
        <div className="intro">
          <h1>Backpack Cali</h1>
          <p>
            Respond to the call of the great outdoors with our Backpack Cal tour
            packages. Whether it's hiking beneath the towering Redwoods, walking
            the ridges of the beautiful Channel Islands, or testing yourself
            against the harshest environments nature has to offer, we have a
            tour for your abilities and interests.
          </p>
        </div>
      </header>
      <main>
        <h2>Our Tours</h2>
        <div className="tour-grid">
          <article>
            <h3>Big Sur Retreat</h3>
            <p>
              <img
                src="https://assets.codepen.io/296057/lil_map_bigsur.png"
                alt="Map of Big Sur."
                className="floatleft"
              />
              Big Sur is big country. The Big Sur Retreat takes you to the most
              majestic part of the Pacific Coast and show you secret trails and
              spectacular scenery. This is one of our most flexible tours, with
              enough options to satisfy the casual hiker to the hard core
              experience junkie.
            </p>
            <button type="button" popoverTarget="big-sur">More Info</button>

            <div popover="auto" id="big-sur">
              <h4>Highlights</h4>
              <ul>
                <li>Stay at the historic Big Sur River Inn</li>
                <li>Privately guided hikes</li>
                <li>Hike through any of the 5 surrounding national parks</li>
                <li>Picnic lunches prepared by the River Inn kitchen</li>
                <li>Complimentary country breakfast.</li>
              </ul>
              <p>Optional 4th day includes:</p>
              <ul>
                <li>Admission to the Henry Miller Library</li>
                <li>Tour the Point Reyes Lighthouse</li>
                <li>Hikes available for all skill levels</li>
              </ul>
              <button type="button" popoverTarget="big-sur" popoverTargetAction="hide">Close</button>
            </div>
          </article>
          <article>
            <h3>Channel Islands Excursion</h3>
            <p>
              <img
                src="https://assets.codepen.io/296057/lil_map_channel.png"
                alt="Channel Islands map"
                className="floatleft"
              />
              The chain known as the Channel Islands offer some of the most
              diverse and unique landscape on the Pacific coast. No motor
              vehicles are allowed on the islands, which makes this relaxing day
              trip hiking package the best and most interesting way to visit.
            </p>

            <button type="button" popoverTarget="channel">More Info</button>
            <div id="channel" popover="auto">
              <h4>Highlights</h4>
              <ul>
                <li>
                  See the rare island fox, which is found only on the Channel
                  Islands.
                </li>
                <li>
                  Visit the Painted Cave on Santa Cruz Island, which is one of the
                  largest sea caves in the world.
                </li>
                <li>
                  Watch the sunset from the cliffs overlooking the Pacific Ocean.
                </li>
                <li>Camp under the stars on one of the islands.</li>
              </ul>

              <button type="button" popoverTarget="channel" popoverTargetAction="hide">Close</button>
            </div>
          </article>
          <article>
            <h3>The Death Valley Survivor's Trek</h3>
            <p>
              <img
                src="https://assets.codepen.io/296057/lil_map_valley.png"
                alt="Death Valley map"
                className="floatleft"
              />
              Hot stuff? Need more of a challenge? Take this tour to the hottest
              place in North America: Death Valley. Due to extreme temperatures
              (120 degrees and higher) in the summer months, this tour is only
              offered November through April. Are you up to the challenge?
            </p>

            <button type="button" popoverTarget="death-valley">More Info</button>
            <div id="death-valley" popover="auto">
              <h4>Highlights</h4>
              <ul>
                <li>
                  Hike one of the many scenic trails in Death Valley Cool off in
                  Darwin Falls and experience the contrast between lush vegetation
                  and the surrounding desert
                </li>
                <li>
                  Enjoy spectacular stargazing in this minimal light pollution
                  environment
                </li>
                <li>
                  Visit Furnace Creek Visitor Center to learn about the park's
                  geology, wildlife, and history
                </li>
                <li>
                  Take a guided tour of Scotty's Castle, an impressive
                  Spanish-style mansion nestled amidst the desert
                </li>
              </ul>

              <button type="button" popoverTarget="death-valley" popoverTargetAction="hide">Close</button>
            </div>
          </article>
          <article>
            <h3>In the Steps of John Muir</h3>
            <p>
              <img
                src="https://assets.codepen.io/296057/lil_map_yosemite.png"
                alt="John Muir map"
                className="floatleft"
              />
              Follow in the steps on John Muir, famous naturalist and founder of
              the Sierra Club, and walk the same trails he helped blaze in and
              around Yosemite National Park.
            </p>

            <button type="button" popoverTarget="john-muir">More Info</button>
            <div id="john-muir" popover="auto">
              <h4>Highlights</h4>
              <ul>
                <li>
                  Follow in John Muir's footsteps by embarking on hikes and nature
                  walks through pristine wilderness areas that he explored.
                </li>
                <li>
                  Engage in informative talks and presentations led by naturalists
                  and experts who can share insights about John Muir's life, his
                  conservation philosophy, and his impact on the natural world.
                </li>
                <li>
                  Explore the national parks and conservation areas that were
                  significant to John Muir's life and work.
                </li>
                <li>
                  Take moments for quiet reflection and contemplation, allowing
                  yourself to connect with nature on a deeper level.
                </li>
              </ul>

              <button type="button" popoverTarget="john-muir" popoverTargetAction="hide">Close</button>
            </div>
          </article>
        </div>
      </main>
      <aside>
        <h2>Frequently Asked Questions</h2>
        <details name="faq">
          <summary>
            <span>
              What does "tour difficulty" in the tour description mean? Is
              "difficult" really difficult?
            </span>
          </summary>
          <div className="details-body">
            <p>
              OK, fair enough question. Difficulty ratings are obviously in the
              eye of the beholder. At first we used the Class ranking system that
              US Parks have used for over 75 years. The problem with that system
              is that it ranks Classes from Class 1 to Class 5. Only Class 1 and 2
              refer to hiking, Class 3 and above are reserved for climbing trails.
              Since only a small portion of our tours have any climbing (and only
              optional climbing at that) we devised our own difficulty scale. If
              you are in good physical shape, you should be able to handle
              anything our tours throw at you. However, the difficult rating is
              difficult, and you should read the tour description carefully before
              committing to the tour. Read our difficulties ratings here for more
              detail.
            </p>
          </div>
        </details>
        <details name="faq">
          <summary>
            <span>
              Do I get a refund if the trail was too hard for me?
            </span>
          </summary>
          <div className="details-body">
            <p>
              We're sorry, but no. We feel that between the detailed tour
              description and the difficulty ranking we have set adequate
              expectations about what level of physical ability is required for
              each tour. If you feel a tour might be too difficult for you, please
              feel free to contact one of our agents, or try one of our easier
              tours to start out.
            </p>
          </div>
        </details>
        <details name="faq">
          <summary>
            <span>What can I NOT bring into the camp sites?</span>
          </summary>
          <div className="details-body">
            <p>
              For the most part, use common sense. Remember that our camping is in
              pristine areas of California wilderness, so we have a strict
              bring-in-in/take-it-out policy. Leaving behind trash or refuse will
              not be tolerated. Also, drugs and/or weapons are not tolerated in
              any camping area and will be grounds for immediate cancellation of
              your tour with no refund. We also ask that you leave your guitars at
              home. This will prevent any unfortunate "Kumbaya" incidents of
              having your guitar broken over your head. We appreciate your
              understanding.
            </p>
          </div>
        </details>
        <details name="faq">
          <summary>
            <span>Can I use your backpack?</span>
          </summary>
          <div className="details-body">
            <p>No, bring your own.</p>
          </div>
        </details>
        <details name="faq">
          <summary>
            <span>Do you offer self-guided tours?</span>
          </summary>
          <div className="details-body">
            <p>
              Most of our tours can be taken as a self-guided tour. We will
              provide you with a map, camping sites, and the cell phone number of
              the main group tour guide. Due to the potentially hazardous nature
              of the Death Valley Trek and MT. Whitney Climb self-guided tours are
              not allowed.
            </p>
          </div>
        </details>
        <details name="faq">
          <summary>
            <span>What do you mean by hazardous?</span>
          </summary>
          <div className="details-body">
            <p>You could die. We don't want that.</p>
          </div>
        </details>
        <details name="faq">
          <summary>
            <span>Can you recommend some gear?</span>
          </summary>
          <div className="details-body">
            <p>
              Yes we can. Take a look at our tour guides gear recommendations.
            </p>
          </div>
        </details>
      </aside>
    </div>
  );
}
