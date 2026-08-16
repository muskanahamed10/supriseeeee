/* =====================================================
   RAKHI BHAI WEBSITE
===================================================== */


/* =====================================================
   MODE
===================================================== */

/*

   TEST = YOU CAN TEST EVERY DAY

   LIVE = REAL AUTOMATIC DATE UNLOCKING

*/

const MODE = "live";


/* =====================================================
   TEST SETTINGS
===================================================== */

let selectedTestDate =
    "2026-08-16";

let showAll =
    false;


/* =====================================================
   ALL SURPRISES
===================================================== */

const surprises = {


    /* ==========================================
       AUGUST 16
    ========================================== */

    "2026-08-16": {

        title:
            "BHAI ❤️",

        text: `

            Some bonds are planned.

            <br><br>

            Some happen unexpectedly.

            <br><br>

            And some people enter your life
            without you realizing just how
            important they will become.

            <br><br>

            Ours was one of those
            <strong>
            unexpected bonds.
            </strong>

            <br><br>

            We may not share the same blood...

            <br><br>

            But somewhere between all the
            conversations, laughs, fights
            and memories...

            <br><br>

            <strong>
            You became family. 🫶
            </strong>

            <br><br>

            So I made something for you.

            <br><br>

            Something special is coming up
            <strong>
            EVERY DAY.
            </strong>

            👀❤️

            <br><br>

            One memory.

            <br>

            One surprise.

            <br>

            One reason to come back.

            <br><br>

            🔒 12 DAYS · 12 SURPRISES · 1 BHAI

            <br><br>

            And trust me...

            <br><br>

            <strong>
            The final one is worth waiting for. ❤️
            </strong>

        `

    },


    /* ==========================================
       AUGUST 17
    ========================================== */

    "2026-08-17": {

        title:
            "THE FIRST MEMORY 📸",

        text: `

            Every story has a beginning.

            <br><br>

            And this is one of ours. ❤️

            <br><br>

            I wonder if we knew then
            that we'd end up making
            so many memories together.

        `,

        image:
            "images/day17.jpg"

    },


    /* ==========================================
       AUGUST 18
    ========================================== */

    "2026-08-18": {

        title:
            "BHAI BEING BHAI 😂",

        text: `

            Okay...

            <br><br>

            Today is not emotional.

            😂

            <br><br>

            Today is dedicated to
            your absolutely ridiculous
            pictures.

            <br><br>

            Don't kill me after seeing this. 😭

        `,

        image:
            "images/day18.jpg"

    },


    /* ==========================================
       AUGUST 19
    ========================================== */

    "2026-08-19": {

        title:
            "ONE OF MY FAVOURITE MEMORIES 🫶",

        text: `

            Some pictures are just pictures.

            <br><br>

            And some pictures immediately
            bring back an entire memory.

            <br><br>

            This is one of those.

            ❤️

        `,

        image:
            "images/day19.jpg"

    },


    /* ==========================================
       AUGUST 20
    ========================================== */

    "2026-08-20": {

        title:
            "A LITTLE VIDEO FOR YOU 🎬",

        text: `

            Okay Bhai...

            <br><br>

            Sit back.

            <br><br>

            Press play. ❤️

        `,

        video:
            "videos/day20.mp4"

    },


    /* ==========================================
       AUGUST 21
    ========================================== */

    "2026-08-21": {

        title:
            "LISTEN TO THIS 🎧",

        text: `

            Some things are easier
            to say than to write.

            <br><br>

            So today...

            <br>

            just listen. ❤️

        `,

        audio:
            "audio/day21.mp3"

    },


    /* ==========================================
       AUGUST 22
    ========================================== */

    "2026-08-22": {

        title:
            "THE BOND I NEVER EXPECTED 🥹❤️",

        text: `

            It's actually crazy to think about
            how we first met...

            <br><br>

            It was during a hackathon.

            <br><br>

            Just another unexpected meeting.

            I never thought that the person
            I met that day would become
            someone this important to me.

            <br><br>

            And somehow...

            <br>

            that random meeting turned into
            one of the most unexpected bonds
            I've ever had. ❤️

            <br><br>

            I still remember that one day
            when I went to college alone...

            <br><br>

            And you came.

            <br><br>

            You stayed the whole day
            just for me.

            <br><br>

            I don't think you realize
            how much that meant to me.

            <br><br>

            <strong>
            Thank you for coming that day. ❤️
            </strong>

            <br><br>

            Thank you for staying.

            <br><br>

            Thank you for listening to me
            every single time I share
            literally everything. 😂

            <br><br>

            Thank you for trusting me.

            <br><br>

            Thank you for being someone
            I can actually talk to.

            <br><br>

            And thank you for giving me
            a kind of brother bond
            I never thought I'd find.

            <br><br>

            We aren't brother and sister
            by blood...

            <br><br>

            But honestly?

            <br><br>

            <strong>
            Sometimes family isn't about blood.
            It's about the person who shows up. ❤️
            </strong>

            <br><br>

            And you did.

            <br><br>

            I'm genuinely grateful that
            our paths crossed at that
            random hackathon.

            <br><br>

            Because I didn't just meet
            a person that day...

            <br><br>

            <strong>
            I found a Bhai. 🫶❤️
            </strong>

        `,

        image:
            "images/day22.jpg"

    },


    /* ==========================================
       AUGUST 23
    ========================================== */

    "2026-08-23": {

        title:
            "OKAY... DON'T GET MAD 😂",

        text: `

            I had to include this.

            <br><br>

            Because what's a Bhai website
            without exposing Bhai a little? 😂

            <br><br>

            Please continue scrolling
            at your own risk. 😭

        `,

        image:
            "images/day23.jpg"

    },


    /* ==========================================
       AUGUST 24
    ========================================== */

    "2026-08-24": {

        title:
            "HOW WELL DO YOU KNOW ME? 🎮",

        text: `

            Enough memories.

            <br><br>

            Time for a test. 👀

            <br><br>

            Let's see whether you're
            actually a good Bhai.

        `,

        quiz:
            true

    },


    /* ==========================================
       AUGUST 25
    ========================================== */

    "2026-08-25": {

        title:
            "THEN → NOW 🥹",

        text: `

            Look at this.

            <br><br>

            One moment...

            <br><br>

            Then another...

            <br><br>

            And suddenly there are
            so many memories.

            <br><br>

            <strong>
            How did this unexpected bond
            become this important? ❤️
            </strong>

        `,

        image:
            "images/day25.jpg"

    },


    /* ==========================================
       AUGUST 26
    ========================================== */

    "2026-08-26": {

        title:
            "THINGS I DON'T SAY ENOUGH 💌",

        text: `

            Thank you.

            <br><br>

            For listening.

            <br><br>

            For trusting.

            <br><br>

            For being there.

            <br><br>

            For putting up with my
            endless stories. 😂

            <br><br>

            And for being someone
            I can genuinely count on.

            <br><br>

            <strong>
            I'm really lucky to have
            found a bond like this. ❤️
            </strong>

        `,

        image:
            "images/day26.jpg"

    },


    /* ==========================================
       AUGUST 27
    ========================================== */

    "2026-08-27": {

        title:
            "BHAI... TOMORROW. ⏳",

        text: `

            Tomorrow is the day.

            <br><br>

            Everything you've seen
            so far...

            <br><br>

            was leading to one final
            surprise.

            <br><br>

            So...

            <br><br>

            <strong>
            Come back tomorrow. ❤️
            </strong>

            <br><br>

            Don't miss it.

        `

    },


    /* ==========================================
       AUGUST 28
    ========================================== */

    "2026-08-28": {

        title:
            "HAPPY RAKSHA BANDHAN, BHAI ❤️",

        text: `

            Bhai...

            <br><br>

            We weren't born as siblings.

            <br><br>

            We didn't grow up together.

            <br><br>

            We weren't supposed
            to become family.

            <br><br>

            It just happened.

            <br><br>

            One random hackathon.

            <br>

            One unexpected meeting.

            <br>

            And somehow...

            <br><br>

            <strong>
            I found a brother. ❤️
            </strong>

            <br><br>

            Thank you for coming
            that day when I was
            alone at college.

            <br><br>

            Thank you for staying
            the whole day.

            <br><br>

            Thank you for listening
            to everything I share.

            <br><br>

            Thank you for trusting me.

            <br><br>

            Thank you for being there.

            <br><br>

            And thank you for giving me
            a brother bond that I never
            thought I'd find.

            <br><br>

            We may not share blood...

            <br><br>

            But we share something
            that matters just as much.

            <br><br>

            <strong>
            A bond. 🫶
            </strong>

            <br><br>

            Happy Raksha Bandhan
            to my unexpected,
            irritating,
            amazing Bhai. 😂❤️

            <br><br>

            <strong>
            You will always be my Bhai. 💜
            </strong>

            <br><br>

            — Your sister ❤️

        `,

        image:
            "images/final.jpg",

        video:
            "videos/final.mp4",

        final:
            true

    }

};


/* =====================================================
   GET CURRENT TEST DATE
===================================================== */

function getToday() {

    if (
        MODE === "test"
    ) {

        return selectedTestDate;

    }


    return new Intl.DateTimeFormat(

        "en-CA",

        {

            timeZone:
                "Asia/Kolkata",

            year:
                "numeric",

            month:
                "2-digit",

            day:
                "2-digit"

        }

    ).format(
        new Date()
    );

}


/* =====================================================
   DATE NUMBER
===================================================== */

function dateNumber(date) {

    return Number(
        date.replaceAll("-", "")
    );

}


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(date) {

    return new Date(
        date + "T00:00:00"
    )
    .toLocaleDateString(
        "en-IN",
        {

            day:
                "numeric",

            month:
                "long"

        }
    );

}


/* =====================================================
   UNLOCK CHECK
===================================================== */

function isUnlocked(date) {

    if (
        showAll
    ) {

        return true;

    }


    return (
        dateNumber(date)
        <=
        dateNumber(
            getToday()
        )
    );

}


/* =====================================================
   DISPLAY SURPRISES
===================================================== */

function displaySurprises() {

    const container =
        document.getElementById(
            "surprises"
        );


    container.innerHTML = "";


    Object.keys(
        surprises
    )
    .sort()
    .forEach(
        date => {


            const surprise =
                surprises[date];


            const unlocked =
                isUnlocked(date);


            /* ==========================
               LOCKED
            ========================== */

            if (
                !unlocked
            ) {

                container.innerHTML += `

                    <div class="card locked">

                        <div class="lock-icon">
                            🔒
                        </div>

                        <h2>
                            ${formatDate(date)}
                        </h2>

                        <p>

                            This surprise is locked.

                            <br><br>

                            Come back on
                            <strong>
                                ${formatDate(date)}
                            </strong>

                            ❤️

                        </p>

                    </div>

                `;

                return;

            }


            /* ==========================
               OPEN CARD
            ========================== */

            let html = `

                <div class="card">

                    <div class="unlock-date">

                        🔓 UNLOCKED ·
                        ${formatDate(date)}

                    </div>

            `;


            /* IMAGE */

            if (
                surprise.image
            ) {

                html += `

                    <img
                        src="${surprise.image}"
                        alt="Bhai memory"
                    >

                `;

            }


            /* TITLE */

            html += `

                <h2>
                    ${surprise.title}
                </h2>

            `;


            /* TEXT */

            if (
                surprise.text
            ) {

                html += `

                    <p>
                        ${surprise.text}
                    </p>

                `;

            }


            /* VIDEO */

            if (
                surprise.video
            ) {

                html += `

                    <video
                        controls
                        playsinline
                    >

                        <source
                            src="${surprise.video}"
                            type="video/mp4"
                        >

                    </video>

                `;

            }


            /* AUDIO */

            if (
                surprise.audio
            ) {

                html += `

                    <audio
                        controls
                    >

                        <source
                            src="${surprise.audio}"
                            type="audio/mpeg"
                        >

                    </audio>

                `;

            }


            /* QUIZ */

            if (
                surprise.quiz
            ) {

                html += `

                    <button
                        onclick="startQuiz()"
                    >

                        START BHAI QUIZ 🎮

                    </button>

                `;

            }


            html += `

                </div>

            `;


            container.innerHTML +=
                html;

        }
    );

}


/* =====================================================
   NEXT DATE
===================================================== */

function getNextDate() {

    const today =
        dateNumber(
            getToday()
        );


    return Object.keys(
        surprises
    )
    .sort()
    .find(
        date =>
            dateNumber(date)
            >
            today
    );

}


/* =====================================================
   COUNTDOWN
===================================================== */

function updateCountdown() {

    const next =
        getNextDate();


    if (
        showAll
    ) {

        document.getElementById(
            "nextDate"
        ).innerText =
            "EVERYTHING IS OPEN 👀";


        document.getElementById(
            "days"
        ).innerText =
            "ALL";


        document.getElementById(
            "hours"
        ).innerText =
            "OPEN";


        document.getElementById(
            "minutes"
        ).innerText =
            "❤️";


        document.getElementById(
            "seconds"
        ).innerText =
            "❤️";


        return;

    }


    if (
        !next
    ) {

        document.getElementById(
            "nextDate"
        ).innerText =
            "FINAL SURPRISE UNLOCKED ❤️";


        document.getElementById(
            "days"
        ).innerText =
            "❤️";


        document.getElementById(
            "hours"
        ).innerText =
            "❤️";


        document.getElementById(
            "minutes"
        ).innerText =
            "❤️";


        document.getElementById(
            "seconds"
        ).innerText =
            "❤️";


        return;

    }


    document.getElementById(
        "nextDate"
    ).innerText =
        formatDate(next);


    /*
       TEST MODE
    */

    if (
        MODE === "test"
    ) {

        document.getElementById(
            "days"
        ).innerText =
            "--";


        document.getElementById(
            "hours"
        ).innerText =
            "--";


        document.getElementById(
            "minutes"
        ).innerText =
            "--";


        document.getElementById(
            "seconds"
        ).innerText =
            "TEST";


        return;

    }


    /*
       LIVE COUNTDOWN
    */

    const target =
        new Date(
            `${next}T00:00:00+05:30`
        );


    const now =
        new Date();


    const difference =
        Math.max(
            0,
            target - now
        );


    const days =
        Math.floor(
            difference /
            86400000
        );


    const hours =
        Math.floor(
            (difference %
                86400000)
            /
            3600000
        );


    const minutes =
        Math.floor(
            (difference %
                3600000)
            /
            60000
        );


    const seconds =
        Math.floor(
            (difference %
                60000)
            /
            1000
        );


    document.getElementById(
        "days"
    ).innerText =
        String(days)
        .padStart(2, "0");


    document.getElementById(
        "hours"
    ).innerText =
        String(hours)
        .padStart(2, "0");


    document.getElementById(
        "minutes"
    ).innerText =
        String(minutes)
        .padStart(2, "0");


    document.getElementById(
        "seconds"
    ).innerText =
        String(seconds)
        .padStart(2, "0");

}


/* =====================================================
   DAY CIRCLES
===================================================== */

function displayDays() {

    const container =
        document.getElementById(
            "daysList"
        );


    container.innerHTML = "";


    const today =
        dateNumber(
            getToday()
        );


    for (
        let day = 17;
        day <= 28;
        day++
    ) {

        const date =
            `2026-08-${String(day)
                .padStart(2, "0")}`;


        const circle =
            document.createElement(
                "div"
            );


        circle.className =
            "day";


        if (
            isUnlocked(date)
        ) {

            circle.classList.add(
                "open"
            );

            circle.innerText =
                day;

        }

        else {

            circle.innerText =
                "🔒";

        }


        if (
            dateNumber(date)
            ===
            today
            &&
            !showAll
        ) {

            circle.classList.add(
                "today"
            );

        }


        container.appendChild(
            circle
        );

    }

}


/* =====================================================
   TEST SELECTED DAY
===================================================== */

function testSelectedDate() {

    const select =
        document.getElementById(
            "testDate"
        );


    selectedTestDate =
        select.value;


    showAll =
        false;


    displaySurprises();

    displayDays();

    updateCountdown();


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

}


/* =====================================================
   SHOW EVERYTHING
===================================================== */

function showEverything() {

    showAll =
        true;


    displaySurprises();

    displayDays();

    updateCountdown();

}


/* =====================================================
   RESET
===================================================== */

function resetTest() {

    selectedTestDate =
        "2026-08-16";


    showAll =
        false;


    document.getElementById(
        "testDate"
    ).value =
        "2026-08-16";


    displaySurprises();

    displayDays();

    updateCountdown();

}


/* =====================================================
   QUIZ
===================================================== */

function startQuiz() {

    const questions = [

        "Who is more irritating? 😂",

        "Who usually starts the conversation?",

        "Are you stuck with me forever? ❤️"

    ];


    let score = 0;


    questions.forEach(
        (question, index) => {


            const answer =
                prompt(

                    `BHAI QUIZ ❤️\n\n` +

                    `Question ${index + 1}\n\n` +

                    question +

                    `\n\nType your answer 😂`

                );


            if (
                answer
            ) {

                score++;

            }

        }
    );


    alert(

        `QUIZ COMPLETE ❤️\n\n` +

        `Score: ${score}/3` +

        `\n\n` +

        `Regardless of the score...` +

        `\nYou're still my Bhai 😂❤️`

    );

}


/* =====================================================
   START WEBSITE
===================================================== */

displaySurprises();

displayDays();

updateCountdown();


/* =====================================================
   UPDATE COUNTDOWN
===================================================== */

setInterval(

    updateCountdown,

    1000

);


/* =====================================================
   LIVE DATE CHECK
===================================================== */

setInterval(

    () => {

        if (
            MODE === "live"
        ) {

            displaySurprises();

            displayDays();

            updateCountdown();

        }

    },

    60000

);