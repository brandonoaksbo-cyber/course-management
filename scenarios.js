const COURSES = [
  {
    id: 'pebble-beach',
    name: 'Pebble Beach Golf Links',
    location: 'Pebble Beach, CA',
    difficulty: 'Legend',
    difficultyLevel: 5,
    description: 'Ocean cliffs, Pacific winds, and the most dramatic finishing stretch in golf.',
    yardage: 6597,
    par: 72,
    available: true,
    holes: [
      {
        number: 1,
        par: 4,
        yardage: 377,
        situation: `You step onto the 1st tee at Pebble Beach. The Pacific Ocean glistens to your right. It's a gentle opener — 377 yards, slight dogleg right — but a 10mph breeze is blowing left to right off the water. The fairway narrows at 250 yards where trees pinch from the right. Two bunkers guard the left side at 260 yards.`,
        choices: [
          {
            label: 'Driver, aim at the left bunkers',
            detail: 'Let the wind work for you — start it left and let the breeze bring it back to center. A 280-yard drive drops you at ~97 yards.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Driver down the left, wind brought it back center — 97 yards left. You hit your wedge to 6 feet and actually drained it. First hole birdie at Pebble Beach. Try not to think about it too hard for the next 17 holes.`
          },
          {
            label: '3-wood to the center of the fairway',
            detail: 'Play conservatively — 230 yards to the heart of the fairway, leaving 147 yards for a 9-iron approach.',
            outcome: 'par',
            score: 0,
            caddieText: `Solid 3-wood, 9-iron to 15 feet. You misread the break by about two cups — it went hard left, you played it straight. Tapped in for par. Good process. Bad putt. Classic golf.`
          },
          {
            label: 'Driver, cut the dogleg right',
            detail: 'Try to cut the corner and shorten the approach. Thread it past the trees on the right.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The trees grabbed it, as they always do. Punched out sideways, hit a gap wedge to 22 feet, and three-putted because of course you did. Welcome to Pebble Beach. Bogey to open.`
          }
        ]
      },
      {
        number: 2,
        par: 5,
        yardage: 502,
        situation: `Hole 2 is a reachable par 5 at 502 yards — and you've striped your drive 280 yards down the right side, leaving 222 yards to the flag. But a 12mph headwind is blowing in off the Pacific, and the green is guarded by a deep bunker short-right. Your 5-wood carries 220 in calm air.`,
        choices: [
          {
            label: 'Lay back to 70 yards with a 9-iron',
            detail: 'Hit 9-iron for 150 yards, leaving 72 yards — your money wedge distance. Set up the shot you own.',
            outcome: 'eagle',
            score: -2,
            caddieText: `9-iron to 72 yards — perfectly calibrated. You hit the wedge and it just... never landed. Pitched once, rolled straight at the flag, and dropped. Eagle. A HOLE OUT FROM THE FAIRWAY. At Pebble Beach. You're going to be telling this story for the rest of your life. Buy the commemorative ball marker.`
          },
          {
            label: '5-wood at the green',
            detail: 'Go for it in two. The headwind makes your 5-wood play like a 3-wood — you need 222 yards of carry to clear the bunker.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Into a 12mph headwind, your 5-wood had absolutely no chance. It came up short, rolled into the front bunker. Blasted to 22 feet. Three-putted because the green was running away from you and your first putt was 6 feet short. Bogey. The math was never there.`
          },
          {
            label: '4-iron punch-and-run',
            detail: 'Hit a low punch to keep it under the wind. 200 yards — it might feed onto the front of the green.',
            outcome: 'par',
            score: 0,
            caddieText: `The punch actually worked — ball rolled up to the front edge, 35 feet away. Hit a decent lag, tapped in for par. Not a disaster. But the 9-iron to 70 yards would have given you a real birdie look. And apparently an eagle look, but let's not dwell on that.`
          }
        ]
      },
      {
        number: 3,
        par: 4,
        yardage: 388,
        situation: `The 3rd plays 388 yards with a subtle dogleg left. The fairway is only 22 yards wide at the 250-yard mark, where trees squeeze in from both sides. There's no wind today — a rare calm on the Monterey Peninsula. A 3-wood leaves ~160 yards in; driver could leave just over 100.`,
        choices: [
          {
            label: '3-wood for precision',
            detail: 'Take 3-wood — lands at 228 yards, leaving 160 yards. A controlled 7-iron approach to a green you can attack.',
            outcome: 'par',
            score: 0,
            caddieText: `3-wood found the short grass — 158 yards left. Hit a smooth 7-iron to 18 feet. Read it as a gentle right-to-left, but it barely moved. Two putts for par. Right play, wrong read. You'll take it.`
          },
          {
            label: 'Driver aimed at the right side',
            detail: 'Trust your driver and aim for the right half of the fairway, trying to thread the gap.',
            outcome: 'double',
            score: 2,
            caddieText: `Driver found the right rough, exactly as feared. The ball was buried in a tuft of grass. You took a big swing at it, it squirted 40 yards sideways into the trees. Punched out, short-sided yourself, chunked the chip. Three-putted from the fringe. Double bogey. The narrow fairway was trying to warn you the whole time.`
          },
          {
            label: 'Driver straight down the middle',
            detail: 'Grip and rip — 280 yards leaves just 108 yards, a soft wedge. Maximum birdie potential.',
            outcome: 'bogey',
            score: 1,
            caddieText: `You flushed it — 108 yards left. Then hit a hot sand wedge that ballooned over the back of the green. Chip to 12 feet, lipped it out on the par save. Bogey. You got away with the driver. The short game didn't return the favor.`
          }
        ]
      },
      {
        number: 4,
        par: 4,
        yardage: 331,
        situation: `The 4th at Pebble Beach is a short, sharp par 4 at 331 yards. OB stakes line the entire right side, and the green is well-guarded with a drop-off left. A left-to-right breeze is blowing. The green is theoretically driveable — but so is the OB. The hole rewards clever thinking, not bravado.`,
        choices: [
          {
            label: 'Driver with a hard draw — go for the green',
            detail: `Try to drive the green with a big draw. 331 yards, wind is left-to-right — you'd need to fight it the whole way.`,
            outcome: 'double',
            score: 2,
            caddieText: `Drawing driver on a 331-yard hole into a left-to-right wind with OB right. It overdrew, ran through the green and into a deep swale left. Drop. Chip. Two putts. Double bogey. The OB is right there and you aimed toward it. Golf gives you exactly what you deserve.`
          },
          {
            label: 'Hybrid to 70 yards',
            detail: 'Take a controlled hybrid — lands at 261 yards, leaving 70 yards. Your money wedge from a safe position.',
            outcome: 'par',
            score: 0,
            caddieText: `Hybrid to 70 yards — perfect positioning. Hit your money wedge to 4 feet. And then... you missed it. Left lip, burned the edge, never had a chance. Tap-in par. Should've been birdie. This is golf and golf is occasionally cruel.`
          },
          {
            label: '3-wood to 120 yards',
            detail: 'Conservative 3-wood to 120 yards. Safe, leaves a pitching wedge distance approach.',
            outcome: 'bogey',
            score: 1,
            caddieText: `3-wood to 120 yards — safe play. Hit a solid pitching wedge to 18 feet. Three-putted because the green is faster than it looks and your first putt ran 4 feet past the hole. Bogey. Should've been smarter about the layup yardage. 70 yards is your number, not 120.`
          }
        ]
      },
      {
        number: 5,
        par: 3,
        yardage: 166,
        situation: `The 5th plays 166 yards to a green perched above the Pacific Ocean. Today there's a 15mph wind straight into your face — effectively adding 20+ yards. The green slopes back-to-front and there's a deep bunker right. Miss long and you're in thick rough. Your 7-iron goes 170, your 9-iron goes 150.`,
        choices: [
          {
            label: '6-iron to the center of the green',
            detail: 'Club up two clubs for the wind. A 6-iron into this headwind plays to about 168 yards. Aim center, no heroics.',
            outcome: 'par',
            score: 0,
            caddieText: `6-iron was exactly right — hit it pure to center-green, 18 feet below the hole. The par putt was a 5-footer right-to-left and you turned it into a 2-footer by rolling the first one 4 feet past. Made the comebacker. Par. Not the birdie you wanted, but the 7-iron in the bunker is worse.`
          },
          {
            label: '7-iron straight at the flag',
            detail: 'Your 7-iron goes 170 yards. The flag is 166. Feels like plenty of club.',
            outcome: 'double',
            score: 2,
            caddieText: `The 7-iron came up 18 yards short and plugged in the front bunker. Blasted it to 25 feet — the green was sliding away and you had no control of the speed. Three-putted. Double bogey. Into a 15mph headwind, that club was never making it. Not even close.`
          },
          {
            label: '9-iron punch shot, keep it under the wind',
            detail: 'Hit a low punch with 9-iron to keep it under the wind and let it release onto the front of the green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The punch stayed low and rolled up to the front of the green — 40 feet away. Hit a decent lag but left it 5 feet short, and the par putt broke more than expected. Bogey. Creative shot, but the 6-iron to center-green gets you closer every time.`
          }
        ]
      },
      {
        number: 6,
        par: 5,
        yardage: 513,
        situation: `Hole 6 plays uphill into the prevailing wind — 513 yards from the tees, but playing at least 530+ today with a 12mph headwind. You've hit driver 275 yards and have 238 yards uphill into the wind to a green guarded by a deep left bunker. Your 5-wood carries 220 in calm air.`,
        choices: [
          {
            label: 'Lay up to 70 yards — 9-iron then wedge',
            detail: '9-iron for 150 yards, leaving 88 yards — within wedge range. Set up the scoring shot you own.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Laid up to 88 yards — smart decision. Hit your wedge to 6 feet on a green that was running faster than you expected. And you made the putt. On an uphill par 5 into the wind, this is the birdie the hole is willing to give you. You took it.`
          },
          {
            label: '5-wood at the green',
            detail: 'Try to reach in two. Uphill into headwind, your 5-wood plays to about 195 yards — well short of the green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The 5-wood never had a chance — uphill, headwind, 238 yards. It came up 40 yards short and rolled into the left bunker. Blasted out past the hole, two putts. Bogey. You played the wrong shot on the wrong hole on the wrong day into the wrong wind.`
          },
          {
            label: '7-iron to exactly 68 yards',
            detail: 'Hit 7-iron for 170 yards, leaving exactly 68 yards — your wedge zone. Clean and precise.',
            outcome: 'par',
            score: 0,
            caddieText: `7-iron to 170 left 68 yards — your number. Hit a solid wedge to 15 feet. Hit a decent putt that caught the right lip and spun out like it was allergic to the hole. Par. The process was right. The lip is just the lip. Golf.`
          }
        ]
      },
      {
        number: 7,
        par: 3,
        yardage: 106,
        situation: `The iconic 7th hole at Pebble Beach — 106 yards straight down to a tiny green perched above the cliffs of Stillwater Cove. The Pacific frames the entire scene. Today the wind is 20mph off the ocean, quartering left-to-right and slightly into your face. The green is the size of a living room, with sheer drops on three sides.`,
        choices: [
          {
            label: 'Half-punch 9-iron, aim left of the flag',
            detail: 'Club down, swing at 70%. Start it left of center and let the quartering breeze bring it right. Keep the ball low.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Half-punch 9-iron, started left, wind brought it back — 8 feet. You stood over it for about 45 seconds. Went through your routine twice. And then you drained it. Birdie on the 7th at Pebble Beach. Most people make a five here without even trying.`
          },
          {
            label: 'Pitching wedge, full swing at the flag',
            detail: 'Full pitching wedge (125 yards) straight at the pin. The wind should bring it back into the green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Full swing into a 20mph crosswind. The pitching wedge ballooned and went hard right — off the green, onto the cliff-side collection area. Nervy chip to 12 feet. You were so relieved it wasn't in the ocean that you hit the par putt too hard. Bogey. Never swing full into a crosswind on this hole. Never.`
          },
          {
            label: '9-iron straight at the pin, full swing',
            detail: 'Full 9-iron (150 yards) aimed directly at the flag. Plenty of club — give yourself a landing buffer.',
            outcome: 'double',
            score: 2,
            caddieText: `Full 9-iron from 106 yards into a 20mph crosswind. The ball ballooned, drifted hard right, and disappeared over the cliff into the Pacific Ocean. That's a penalty drop. Then you chunked the chip from the drop zone. Double bogey. Pebble's 7th doesn't care how far you hit it. It only cares whether you controlled it.`
          }
        ]
      },
      {
        number: 8,
        par: 4,
        yardage: 418,
        situation: `The 8th hole at Pebble Beach is one of the most dramatic in golf — a blind tee shot over a chasm to a fairway that doglegs left along the cliffs, the Pacific 100 feet below on your right. You've driven it well: 275 yards, 143 yards left to the flag. The pin is tucked right behind a greenside bunker. The ocean is still in play right.`,
        choices: [
          {
            label: '9-iron to the left half of the green',
            detail: 'Miss left, miss safe. Aim for the middle-left of the green — takes the bunker and ocean out of play entirely.',
            outcome: 'par',
            score: 0,
            caddieText: `9-iron to the left half — smart. Hit it to 28 feet left of the flag. Two solid putts for par. You avoided the ocean, avoided the bunker, and walked away with exactly what this hole was offering. Not flashy. Correct.`
          },
          {
            label: '9-iron straight at the flag',
            detail: `Attack the right-side pin directly. 143 yards, 9-iron distance — flush it and you're looking at a tap-in birdie.`,
            outcome: 'bogey',
            score: 1,
            caddieText: `Straight at the right-side pin — it caught the bunker by two feet. Tough explosion, you bladed it slightly and rolled to 15 feet. Missed the par save. Bogey. The ocean is 100 feet below and to the right. Any miss right on this hole has consequences. The miss has to go left. Always left.`
          },
          {
            label: '7-iron into the center of the green',
            detail: 'Take extra club, keep it below the hole, land it center-green and let the slope release it toward the flag.',
            outcome: 'birdie',
            score: -1,
            caddieText: `7-iron to the center of the green — landed soft and released toward the flag, 12 feet. You read the putt right and poured it in. Birdie. Sometimes taking the extra club and letting the slope do the work is the most attacking play on the course. You found that out.`
          }
        ]
      },
      {
        number: 9,
        par: 4,
        yardage: 464,
        situation: `Hole 9 is a long, demanding par 4 at 464 yards running alongside Stillwater Cove — the ocean is on your right the entire length of the hole. A 15mph tailwind is helping today, making it play like 445. The fairway tilts toward the ocean on the right side. If you flush driver, you could have as little as 175 yards in.`,
        choices: [
          {
            label: 'Driver down the left side',
            detail: 'Start it at the left rough edge and let it work back to center. Eliminates the right-side tilt. Leaves ~185 yards.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Driver to the left half, tailwind added carry — 184 yards left. Flushed a 7-iron to 11 feet. And you made the putt. Birdie on the long par 4. Playing the right side of the fairway on a hole where the wrong side is the ocean is not complicated. You figured that out.`
          },
          {
            label: 'Driver at the center of the fairway',
            detail: 'Hit it straight and let the tailwind carry it. Could leave only 165 yards — a half-9-iron.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Aimed center, hit it center — but the fairway tilt ran it right toward the cove. Found the rough along the water. Restricted lie, punched out 80 yards, wedge to 25 feet, three-putted because the first putt hit the toe. Bogey. The slope was telling you where to aim from the tee. You didn't listen.`
          },
          {
            label: '3-wood down the center',
            detail: 'Play safe, 230 yards, leaves 234 yards. A hybrid or long iron second shot, well away from the ocean.',
            outcome: 'par',
            score: 0,
            caddieText: `3-wood to center, hybrid to the front edge, two putts for par. Nothing went wrong. Nothing went right either. The tailwind made this hole birdie-able with a driver left, and you laid back instead. Par is fine. Birdie was right there.`
          }
        ]
      },
      {
        number: 10,
        par: 4,
        yardage: 446,
        situation: `The 10th begins the famous Pebble Beach cliff stretch. It's 446 yards slightly uphill into the prevailing wind — 12mph into your face today. You've hit driver 275 yards and have 171 yards to the flag. The wind makes it play like 190 yards. The green is on a shelf above the cliff; anything short-right falls away toward the Pacific.`,
        choices: [
          {
            label: '6-iron to the center of the green',
            detail: 'Two clubs extra for the wind. 6-iron into a 12mph headwind plays to about 175 yards. Aim center, not at the flag.',
            outcome: 'par',
            score: 0,
            caddieText: `6-iron — right call. Hit it to center-green, 22 feet away. Hit a solid putt that stopped 2 feet short — you decelerated slightly and everyone knew it. Tapped in for par. You made the right club selection. The putting green had the last word.`
          },
          {
            label: '7-iron at the flag',
            detail: `Your 7-iron goes 170 yards — close enough to the hole's yardage. Take it straight at the pin.`,
            outcome: 'bogey',
            score: 1,
            caddieText: `The 12mph headwind turned your 7-iron into a 150-yard club today. Ball came up 20 yards short on the shelf's face — an awkward spot. Chip to 18 feet, missed the par putt — burned the right edge. Bogey. Book yardage and wind-adjusted yardage are two completely different numbers.`
          },
          {
            label: '7-iron at maximum effort',
            detail: 'Swing harder than normal to fight through the wind and squeeze 185 yards out of your 7-iron.',
            outcome: 'double',
            score: 2,
            caddieText: `Swinging harder into a headwind adds spin, which makes the ball balloon even more. Your "max effort" 7-iron went 152 yards — less than a normal swing. Ball dropped off the front-right edge toward the cliff. From a horrid lie you couldn't advance it cleanly. Double bogey. The answer is always more club, same swing. Tattooed on the inside of every caddie's brain.`
          }
        ]
      },
      {
        number: 11,
        par: 4,
        yardage: 380,
        situation: `Hole 11 is a relatively straightforward par 4 at 380 yards — a brief rest from the cliff drama. But you've made a mistake off the tee: pushed driver into the right rough, leaving a semi-blocked lie in 4-inch rough with 164 yards to the flag. A tree branch is in your intended swing path if you go straight at the pin.`,
        choices: [
          {
            label: 'Punch out to 70 yards — take your medicine',
            detail: 'Aim left of the branch, punch 9-iron low to the fairway. Lands at 94 yards — close to wedge range.',
            outcome: 'par',
            score: 0,
            caddieText: `Took your medicine — punched to 94 yards, hit your wedge to 4 feet, and made the putt. Par, from the rough, with a tree in your backswing. That's called scrambling and it's one of the most underrated skills in golf.`
          },
          {
            label: 'Power through the rough at the flag',
            detail: 'Aim just left of the branch and muscle a hard 7-iron through the rough at the green.',
            outcome: 'double',
            score: 2,
            caddieText: `The branch caught your follow-through. The ball squirted 30 yards sideways into the bunker at the green's edge. Blasted out, two putts. Double bogey. This is the most predictable outcome in golf — deep rough, blocked lie, long iron = disaster. The rough was telling you to lay up. You ignored it.`
          },
          {
            label: 'Wedge punch to 120 yards',
            detail: 'Short punch shot to get back in play, leaving a full pitching wedge approach.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Got back in play, which was good. But 120 yards left you in a slightly awkward spot — not your best yardage. Hit a decent pitching wedge to 25 feet and missed the par putt left. Bogey. When you're in trouble, punch to your BEST yardage, not just any yardage. 70 yards is a different shot than 120.`
          }
        ]
      },
      {
        number: 12,
        par: 3,
        yardage: 202,
        situation: `The 12th is a long par 3 at 202 yards over a stretch of beach to a wide green that slopes gently back-to-front. Today there's almost no wind — a truly rare gift on the Monterey Peninsula. With calm conditions, this plays as a pure distance management hole. The only mistake is overthinking it.`,
        choices: [
          {
            label: '4-iron at the back pin',
            detail: 'Pin is back-left. Take 4-iron and attack the flag directly on this rare calm day.',
            outcome: 'birdie',
            score: -1,
            caddieText: `4-iron at the back pin — aggressive on a calm day. Hit it pure, dropped two feet short of the flag and trickled to tap-in range. Birdie. Calm conditions at long par 3s are gifts and you treated them like one. On any other day at Pebble you're not going near that pin.`
          },
          {
            label: '5-iron to the center of the green',
            detail: 'On a calm day, pure distance: 5-iron carries about 200 yards. Aim center, make par, move on.',
            outcome: 'par',
            score: 0,
            caddieText: `5-iron to center-green — textbook. 22 feet, two putts. Par on a 202-yard par 3. Nothing exciting happened and that was the plan. On calm days with a back pin you had room to be more aggressive. But par is par and par keeps the round together.`
          },
          {
            label: '6-iron with extra effort',
            detail: 'Swing hard with 6-iron to squeeze out 202 yards. The beach is only in play short.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Swinging harder doesn't add distance — it adds inconsistency. Your hard 6-iron flared right into the rough, left an awkward chip, toed the chip, and missed the par putt right. Bogey. On a calm day at a 202-yard hole, hitting a comfortable 5-iron at real distance beats manufacturing distance from the wrong club every single time.`
          }
        ]
      },
      {
        number: 13,
        par: 4,
        yardage: 399,
        situation: `The 13th is a dogleg-left par 4 at 399 yards. You've hit a great drive to the left side of the fairway — 139 yards to the flag. But the pin is tucked front-left behind a deep pot bunker. Hit it right and you've got a 20-foot birdie putt. Hit it left and you're in the bunker facing a near-impossible par save.`,
        choices: [
          {
            label: 'Knock-down 8-iron, center of the green',
            detail: 'Flight a low 8-iron to center-green. It lands firm, releases toward the front-left flag.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Knock-down 8-iron, center-green — it landed firm and trickled toward the front-left flag to 9 feet. You read it as a straight putt. It was straight. You drained it. Birdie. The pot bunker never came into play because you never gave it a chance.`
          },
          {
            label: '9-iron to the right half of the green',
            detail: 'Miss right, miss safe — 9-iron at the right half takes the bunker completely out of play.',
            outcome: 'par',
            score: 0,
            caddieText: `9-iron to the right half — took the sucker bunker completely out of play. 22 feet right of the flag. Hit a solid putt that broke more than you thought and barely tapped in from 2 feet. Par. Smart play, mediocre putt, good score. The pros call this "course management." The rest of us call it surviving.`
          },
          {
            label: '9-iron straight at the flag',
            detail: `Attack the front-left pin directly. 139 yards, 9-iron — if you flush it, it's birdie range.`,
            outcome: 'bogey',
            score: 1,
            caddieText: `9-iron at the sucker flag found the pot bunker. Blasted it 12 feet past — you can barely swing in a Pebble pot bunker, the walls are above your knees. Missed the par putt. Bogey. The sucker flag claimed another victim. It has been doing this since 1919.`
          }
        ]
      },
      {
        number: 14,
        par: 5,
        yardage: 573,
        situation: `The 14th is the longest hole at Pebble Beach — 573 yards. Even with driver, you'll have 290+ yards remaining. This is a three-shot par 5 no matter what you do. You've hit driver 280 yards, leaving 293 yards. Wind is cross-left-to-right at 10mph. The fairway is generous, but the approach into the green is well-guarded.`,
        choices: [
          {
            label: 'Calibrated layup to 70 yards',
            detail: 'Calculate precisely: hybrid or 5-iron for 223 yards leaves exactly 70 yards for your money wedge. Know your number.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Calibrated layup to exactly 73 yards — perfectly executed. Money wedge to 6 feet. Made the putt. Birdie on the longest hole at Pebble Beach. Not because you were long. Because you were precise. Any touring pro will tell you: the second shot on a par 5 isn't about distance, it's about your third shot yardage.`
          },
          {
            label: '3-wood as far as possible',
            detail: 'Hit 3-wood for max distance, leaving ~55 yards. Gets you close to birdie range on the third.',
            outcome: 'par',
            score: 0,
            caddieText: `3-wood 240 yards but the crosswind pushed it into the first cut of rough — 53 yards left, bad lie. Tried to spin a wedge but it came out low and hot, rolled 18 feet past the flag. Two putts for par. Maximum distance isn't maximum result. A calibrated layup to your best yardage beats max-distance into trouble every time.`
          },
          {
            label: 'Two-stage layup: iron, then wedge to set up',
            detail: 'Conservative iron to 180 yards out, then a precise wedge to your 70-yard zone before attacking.',
            outcome: 'bogey',
            score: 1,
            caddieText: `You stacked the layup: iron to 180, then a second wedge to 70 yards — meaning your money wedge was your FOURTH shot to the green on a par 5. Got there, hit a decent wedge to 10 feet, missed the birdie putt for par, then missed the par putt too. Bogey. One well-chosen second shot to 70 yards is all you need. Stop overcomplicating it.`
          }
        ]
      },
      {
        number: 15,
        par: 4,
        yardage: 397,
        situation: `The 15th at Pebble is a medium-length par 4 at 397 yards into the prevailing wind (10mph). You've hit a solid drive to 270 yards, leaving 127 yards. Pin is middle-right. There's a bunker short-right and the green is running firm today — a ball that flies all the way to the hole will have trouble stopping.`,
        choices: [
          {
            label: '9-iron to a landing spot short of the flag',
            detail: 'Play 9-iron to 10 yards short of the flag and let the firm green release the ball toward the hole.',
            outcome: 'birdie',
            score: -1,
            caddieText: `9-iron to 10 yards short of the flag — it landed and released to 7 feet. Made the putt. You read the firm green conditions and used them. The ball did exactly what you planned. That's what good course management looks like from 127 yards.`
          },
          {
            label: 'Pitching wedge directly at the flag',
            detail: 'Take pitching wedge (115 yards), flight it high, try to stop it near the flag from 127 yards.',
            outcome: 'par',
            score: 0,
            caddieText: `Pitching wedge from 127 yards checked up to 14 feet — good shot, wrong club by 12 yards. Hit a decent par putt that slid by the right edge. Par. From 127 yards you had enough club to attack with your 9-iron. Using pitching wedge from that distance is playing defense when offense was available.`
          },
          {
            label: 'Sand wedge at full effort',
            detail: 'Swing your sand wedge hard to reach 127 yards. Try to stop it dead on a firm green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Swinging a sand wedge hard to reach 127 yards on a firm green is a uniquely bad idea. The ball hit, checked violently, then spun off the right edge into the bunker because that's what maximum-spin wedge shots do on hard surfaces. Blasted out to 20 feet. Two putts. Bogey. The right club for 127 yards is not the sand wedge at full power.`
          }
        ]
      },
      {
        number: 16,
        par: 4,
        yardage: 402,
        situation: `Hole 16 is a sweeping left-to-right dogleg par 4 at 402 yards. Wind is blowing right-to-left today — which hurts a fade and helps a draw. The inside of the dogleg has trees. Cutting the corner means carrying 255 yards over the trees. Playing the full dogleg left-center leaves ~122 yards in.`,
        choices: [
          {
            label: 'Driver up the left side, play the dogleg',
            detail: 'Aim left-center, play the full dogleg. 280-yard drive leaves ~122 yards for a soft pitching wedge.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Driver up the left side — perfect line. 122 yards left, hit a crisp pitching wedge to 9 feet. Made the putt. Birdie. Playing the proper line on a dogleg is almost always the right call, especially when the wind is against cutting the corner. You played the hole the way it was designed.`
          },
          {
            label: 'Driver to cut the corner over the trees',
            detail: 'Aim at the trees and carry 255 yards over them. Right-to-left wind is working against your natural fade.',
            outcome: 'double',
            score: 2,
            caddieText: `Needed 255 yards to clear those trees. Came up 8 yards short — ball deflected hard into the rough under the branches. From a tangled lie you had one option: sideways. Wedge to 30 feet. Three-putted. Double bogey. The tree shortcut has a near-100% bogey-or-worse rate at Pebble. The math has never worked.`
          },
          {
            label: '3-wood to the wide part of the fairway',
            detail: '3-wood to the wide left section, leaving 160 yards for a 7-iron approach.',
            outcome: 'par',
            score: 0,
            caddieText: `3-wood to the wide left fairway — safe and smart. 7-iron to 20 feet. Two putts for par. Nothing wrong with it. Driver up the left side would have been equally safe with a shorter approach. But par counts the same and you kept the ball in play. That's the job.`
          }
        ]
      },
      {
        number: 17,
        par: 3,
        yardage: 208,
        situation: `The 17th at Pebble Beach. You've thought about this hole a hundred times. 208 yards, the ocean hugging the entire left side, the green angled toward the water. Today: 18mph wind directly into your face, making it play like 240+ yards. The flag is center-left — dangerously close to the ocean side. Jack Nicklaus hit a 1-iron here in 1972. What do you hit?`,
        choices: [
          {
            label: '3-wood aimed center-right of the green',
            detail: 'Take 3-wood (240+ yards in calm air) to fight the wind. Aim center-right — ocean completely out of play.',
            outcome: 'birdie',
            score: -1,
            caddieText: `3-wood aimed center-right — removed the ocean from play entirely. Into the 18mph headwind it played to about 205 yards. Landed center, released toward the flag — 8 feet. Made the putt. On the most dangerous par 3 at Pebble Beach, you attacked with the shot that also protected you. Jack Nicklaus would approve.`
          },
          {
            label: '4-iron to the center of the green',
            detail: 'Forget the flag. 4-iron into the headwind plays to about 190 yards. Aim center-right, take par and move on.',
            outcome: 'par',
            score: 0,
            caddieText: `4-iron aimed right, stayed right. Center-right of the green, 20 feet away. Two putts for par. On the 17th at Pebble Beach in an 18mph headwind, a par feels like a birdie. You didn't get greedy, didn't find the ocean, and are now looking at a closing par 5 with a chance to finish strong.`
          },
          {
            label: '3-iron directly at the left-center flag',
            detail: `Take 3-iron and attack the flag. The ocean is left, but you're going for birdie.`,
            outcome: 'double',
            score: 2,
            caddieText: `3-iron at the left-center flag, into 18mph of headwind. The ocean took your ball. Drop zone, wedge on, two putts. Double bogey. This hole has been eating golf balls since 1919 and yours was just the latest. The flag was on the ocean side. The wind was blowing you toward the ocean. You aimed at the ocean. The ocean accepted your offering.`
          }
        ]
      },
      {
        number: 18,
        par: 5,
        yardage: 543,
        situation: `The most famous finishing hole in golf. 543 yards hugging Stillwater Cove, the Pacific Ocean the entire left side from tee to green. You need a birdie to post a great score. Your drive of 278 yards left you on the right side of the fairway — 265 yards to the flag. Wind is 8mph off the ocean, left to right. The green is guarded on the left by the sea wall.`,
        choices: [
          {
            label: 'Lay up right, money wedge from 70 yards',
            detail: 'Precise layup to the right side at 70 yards. Ocean completely eliminated. Set up your closing wedge.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Laid up to the right side — ocean never even a thought. Hit your money wedge from 70 yards to 6 feet. Made the birdie putt to close it out. You finished Pebble Beach the way it's meant to be closed: smart, controlled, and a made putt at the end. Tom Watson finished this way. Now so did you.`
          },
          {
            label: '3-wood at the green from 265 yards',
            detail: 'Go for the green in two. The ocean is left, but flush a 3-wood right and you could make eagle.',
            outcome: 'double',
            score: 2,
            caddieText: `265 yards with the ocean guarding the entire left side. The 3-wood started fine but leaked left — Stillwater Cove took your ball. Drop zone, onto the green in four, two putts. Double bogey. Pebble's 18th has swallowed eagle attempts since the course opened in 1919. The cove wins every time you let it into play.`
          },
          {
            label: 'Conservative layup to 120 yards',
            detail: '120-yard layup — well short of wedge distance but far from the ocean.',
            outcome: 'par',
            score: 0,
            caddieText: `Laid up to 120 yards — safe, but not your best number. Hit a nice wedge to 18 feet but couldn't convert the birdie putt, and the par putt just curled away at the end. Par to close. The ocean never came into play, which was smart. But 70 yards is a better number than 120 for you, and you left the birdie opportunity on the table.`
          }
        ]
      }
    ]
  },
  {
    id: 'tpc-sawgrass',
    name: 'TPC Sawgrass',
    location: 'Ponte Vedra Beach, FL',
    difficulty: 'Championship',
    difficultyLevel: 4,
    description: 'Island greens, tight fairways, and the course the PGA Tour built to break players.',
    yardage: 6530,
    par: 72,
    available: false,
    holes: []
  },
  {
    id: 'augusta-national',
    name: 'Augusta National Golf Club',
    location: 'Augusta, GA',
    difficulty: 'Masters',
    difficultyLevel: 4,
    description: `Amen Corner, Rae's Creek, and the most storied Par 3 course in history.`,
    yardage: 6565,
    par: 72,
    available: false,
    holes: []
  },
  {
    id: 'st-andrews',
    name: 'St. Andrews Old Course',
    location: 'St. Andrews, Scotland',
    difficulty: 'Historic',
    difficultyLevel: 5,
    description: 'Wind, pot bunkers, double greens, and the Road Hole. Golf since 1552.',
    yardage: 6566,
    par: 72,
    available: false,
    holes: []
  },
  {
    id: 'bethpage-black',
    name: 'Bethpage Black',
    location: 'Farmingdale, NY',
    difficulty: 'Brutal',
    difficultyLevel: 5,
    description: 'Warning signs posted at the 1st tee. Narrow fairways, deep rough, no mercy.',
    yardage: 6551,
    par: 70,
    available: false,
    holes: []
  }
];
