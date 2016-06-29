import {
    Entry, EntryBlock, Picture, PictureSquareSet, EntryHeader, Title, EntryText, EntryVideo,
    EntryArticle
} from './entry';

export module MammothEntry {

    let dir = "./mammothSet/"
    let mobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
    if(mobile)
        dir += "xs/"

    let entryBlocks: EntryBlock[] = [
        new EntryText(
            "Day 1.",
            [
                "Having gotten to Mammoth at 5 am we looked for a camping spot for what seemed like forever. We stopped at every campsite Mammoth had to offer with reservation signs cluttered on every spot. Finally we managed to crash a campsite where people hadn't shown up for the night. It would be the only night/morning we stayed at a campsite.",
                "We started the first day heading up to the top of San Joaquin Rim Trail. You can get a view of the Minarets at the base of the trailhead where most people stop and take pictures and leave. We were heading much futher up though to 10.5 thousand feet up. In retrospect it would've been much wiser to ease the elevation gain from 0 ( back home) to 10.5 k the next day."
            ]
        ),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "7K2A5537"}),
                new Picture({picture: dir + "7K2A5545"})
            ],
            "The top of the mountain gave views that seemed to pop out right at you. Trails lined the rim of the mountains going further than our eyes could see. On every side there was something distinct and unique, from the sharp rocky edges of the Minarets, the desolute desert on another side, and the lush tree filled mountain directly ahead. As much as we wanted to push forward down the rim each step took its toll. Breathing definately became harder and a thumping in the head was present telling us to get down. We went back to rest from the trip up. Ibuprofen and two hours of rest were my best friends after that trail in the truck but I was ready for more the next day."
        ),
        new Picture({title: "", picture: dir + "7K2A5556"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "7K2A5566"}),
                new Picture({picture: dir + "7K2A5573"})
            ],
            '',
            false,
            true
        ),
        new Picture({title: "", picture: dir + "7K2A5779"}),
        new Picture({title: "", picture: dir + "7K2A6172"}),
        new EntryText("Day 2."),
        new Picture({title: "", picture: dir + "7K2A6174"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "7K2A6178"}),
                new Picture({picture: dir + "7K2A6189"}),
                new Picture({picture: dir + "7K2A6223"}),
                new Picture({picture: dir + "7K2A6211"})
            ],
            "Laurel lakes was a place people told us on our first day to expect some hard times on certain switch back turns going up and down. We figured we'd be ok going up given that the Taco has a short bed. Sadly the trail did prove to be harder and claimed a bash guard. With clouds to cover the summer sun ahead and noone else insight we started up the 4wd road hoping the truck would live up to the task."
        ),
        new Picture({
            title: "",
            picture: dir + "7K2A6224",
            note: "The further we go up the more you could see how massive the mountains were compared to the small 4wd road paved out on the side of the mountain. Feeling like the size of ant in these parts was refreshing yet worrisome knowing how far you'd fall if you didn't stick to the road."
        }),
        new Picture({title: "", picture: dir + "7K2A6244"}),
        new Picture({
            title: "",
            picture: dir + "7K2A6263",
            note: "The road near the area where a rockslide had happened proved to be anything but easy or stable. Constant movement from the traction of the tires on the loose rocks pushed rocks down on both sides of the road. We wanted to get out of the rockslide area as fast as we could."
        }),
        new Picture({
            title: "",
            picture: dir + "7K2A6292",
            note: "Following the rockslide area was a series of switchbacks going up and down not really knowing when We'd reach the top. When we finally did and saw what we had climbed up, it seemed almost insane that such a road could be carved up the face of these mountains."
        }),
        new Picture({
            title: "",
            picture: dir + "7K2A6300",
            note: "Having gotten to the top we took a step out to see where we had gotten. Rain thunder and wind welcomed us at our top height of 10,300 feet. Luckly this time however I brought some ibuprofen along for the ride to ease the effects of altitude sickness."
        }),
        new Picture({
            title: "",
            picture: dir + "7K2A6302",
            note: "Bringing a jacket definately was a choice well made."
        }),
        new Picture({title: "", picture: dir + "7K2A6333"}),
        new PictureSquareSet(
            [
                new Picture({picture: dir + "7K2A6357"}),
                new Picture({picture: dir + "7K2A6360"}),
                new Picture({picture: dir + "7K2A6372"}),
                new Picture({picture: dir + "7K2A6370"})
            ],
            "Traffic jam, size of four at the last turn to the bottom of laurel lakes. Not only was the turning angle hard enough, in the middle of the turn lied a huge rock ready to scrape the bottom of any cars willing to make a go through it. The alternative: proceeding forward to a sheer drop off on the cliff and trying to do 3,4, or 5 point turns."
        ),
        new Picture({
            title: "",
            picture: dir + "7K2A6373",
            note: "Trying to decide on the turn or pulling on forward for our chances with the cliff."
        }),
        new EntryVideo(dir + "7K2A6441"),
        new Picture({
            title: "",
            picture: dir + "7K2A6378",
            note: "After 30 minutes of trying to guide eachother. We managed to pull off flipping the car around and setting it near the cliff. Realizing how hard it was to just turn it around, we decided on leaving it on top for the night and making the rest of the trip on foot to the bottom of laurel lakes. Two trips were made back up to the car to get the gear for the night."
        }),
        new Picture({title: "", picture: dir + "7K2A6399"}),
        new EntryVideo(dir + "7K2A6459"),


        new PictureSquareSet(
            [
                new Picture({picture: dir + "7K2A6401"}),
                new Picture({picture: dir + "7K2A6512"})
            ],
            null,
            false,
            true
        ),

        new PictureSquareSet(
            [
                new Picture({picture: dir + "7K2A6527"}),
                new Picture({picture: dir + "7K2A6493"})
            ],
            null,
            false,
            true
        ),
        new EntryVideo(dir + "7K2A6533"),
        new Picture({picture: dir + "7K2A6770"}),
        new EntryText("Day 3.", ["Like all trips, the last day is always spent trekking back the hundreds of miles back home. We couldn't help but stop by Bodie given that it was only 10 miles east off the road back home. Known as a ghost town, the 4th of the July weekend made it almost impossible to take a photo of a building not surrounded by people already. Yet like all towns, the outskirts tend to be much more isolated. Having gotten a nice rest here we left back home."])
    ]

    let entryHeader: EntryHeader = new EntryHeader(
        new Picture({picture: dir + "7K2A5450"}),
        new Title("A", "HOLIDAY IN THE MOUNTAINS ", "by Nardo + Kevin"),
        "Fourth of July weekend usually means lots of people, packed streets, packed parking lots, bbq, and last but def. not least fireworks. For once though we wanted to take the opportunity to do something else for a change. Having never taken out the Taco ( Tacoma ) for off roading, we headed out to Mammoth for 3 days off camping and trails for the new truck.  Word to the wise, it's much better to plan camping spots months in advance.")

    export function getEntry(): EntryArticle {
        return new EntryArticle(entryHeader, entryBlocks)
    }
}