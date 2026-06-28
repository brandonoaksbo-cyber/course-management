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
        number: 1, par: 4, yardage: 377,
        situation: `You step onto the 1st tee at Pebble Beach. The Pacific Ocean glistens to your right. It's a gentle opener — 377 yards, slight dogleg right — but a 10mph breeze is blowing left to right off the water. The fairway narrows at 250 yards where trees pinch from the right. Two bunkers guard the left side at 260 yards.`,
        choices: [
          {
            label: 'Driver, aim at the left bunkers',
            detail: 'Let the wind work for you — start it left and let the breeze bring it back to center. A 280-yard drive drops you at ~97 yards.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 25, caddieText: `Driver worked the wind perfectly. 97 yards left, wedge to 6 feet. Drained it. Birdie on the 1st at Pebble Beach. Don't overthink it — just keep doing that.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `Driver down the left, wind brought it back to center. 97 yards, wedge to 16 feet. Misread the break by a cup. Tapped in for par. Right plan, average putt. Story of golf.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Driver was right, wind worked — but you hit the wedge a little fat. Chip to 12 feet. Missed the par putt left. Bogey. The plan was correct. The execution wasn't.` }
            ]
          },
          {
            label: '3-wood to the center of the fairway',
            detail: 'Play conservatively — 230 yards to the heart of the fairway, leaving 147 yards for a 9-iron approach.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `Clean 3-wood, 9-iron to 9 feet. Read it perfectly. Birdie. Sometimes the safe play still makes birdie. Not often, but sometimes.` },
              { outcome: 'par',    score:  0, weight: 50, caddieText: `Solid 3-wood, 9-iron to 14 feet. Misread it left. Tapped in for par. Fine. Moving on.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `3-wood found the fairway, 9-iron was a touch fat and short. Chip to 18 feet. Three-putted — first one was 4 feet past and you know it. Bogey.` }
            ]
          },
          {
            label: 'Driver, cut the dogleg right',
            detail: 'Try to cut the corner and shorten the approach. Thread it past the trees on the right.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 10, caddieText: `Cut the corner, found the fairway edge by a foot. Wedge to 12 feet. Made the par putt. Got away with it completely. Don't try that again.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `Right rough, as expected. Punched out sideways, wedge to 22 feet. Three-putted because of course you did. Bogey. The trees are always tighter than they look from the tee.` },
              { outcome: 'double', score: 2, weight: 45, caddieText: `Trees. Then more trees. Had to punch sideways twice to get clear. Wedge to 30 feet. Three-putted. Double bogey. Welcome to Pebble Beach. The fairway was right there the entire time.` }
            ]
          }
        ]
      },
      {
        number: 2, par: 5, yardage: 502,
        situation: `Hole 2 is a par 5 at 502 yards — and you've striped your drive 280 yards down the right side, leaving 222 yards to the flag. A 12mph headwind is blowing in off the Pacific. The green is guarded by a deep bunker short-right. Your 5-wood carries 220 in calm air.`,
        choices: [
          {
            label: 'Lay back to 70 yards with a 9-iron',
            detail: 'Hit 9-iron for 150 yards, leaving 72 yards — your money wedge distance. Set up the shot you own.',
            outcomes: [
              { outcome: 'eagle',  score: -2, weight:  3, caddieText: `9-iron to 72 yards, hit the wedge — and it went in on the fly. EAGLE. A HOLE OUT FROM THE FAIRWAY at Pebble Beach. Buy the commemorative ball marker immediately.` },
              { outcome: 'birdie', score: -1, weight: 32, caddieText: `9-iron to 72 yards. Hit the wedge to 5 feet. Drained it. Birdie. The layup specialists are always right in the end.` },
              { outcome: 'par',    score:  0, weight: 45, caddieText: `Laid up to 72 yards, hit a decent wedge to 14 feet. Misread the break and tapped in for par. Right plan, one missed putt. That's fine.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Laid up perfectly, but the wedge was a little hot — 8 feet past the hole. Missed the par putt left. Bogey. Right process, wrong pace on the approach.` }
            ]
          },
          {
            label: '5-wood at the green',
            detail: 'Go for it in two. 222 yards to carry the front bunker. 12mph headwind into your face.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 10, caddieText: `Somehow flushed the 5-wood through the headwind — caught the front edge and rolled to 28 feet. Two putts. Par. Shouldn't have worked. Did.` },
              { outcome: 'bogey', score:  1, weight: 40, caddieText: `Into 12mph of headwind, your 5-wood came up short in the bunker. Blasted to 22 feet. Three-putted. Bogey. The math was never there.` },
              { outcome: 'double', score: 2, weight: 50, caddieText: `5-wood ballooned into the headwind, dropped in the front bunker. Blasted over the green. Chip, two putts. Double bogey. The layup to 70 yards was right there the entire time.` }
            ]
          },
          {
            label: '4-iron punch-and-run',
            detail: 'Hit a low punch to keep it under the wind. 200 yards — it might feed onto the front of the green.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 10, caddieText: `Punch ran up to 18 feet. Hit the birdie putt dead center. Sometimes punching it along the ground and making birdie is just better than everyone else's plan.` },
              { outcome: 'par',    score:  0, weight: 45, caddieText: `Punch worked — ball rolled up to the front edge, 35 feet away. Decent lag, tapped in for par. Honest score from a tough spot.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `Punch came up 20 yards short of the green. Wedge from 52 yards hit heavy. Long lag, missed the par putt. Bogey. The 9-iron to 70 yards sets up better every time.` }
            ]
          }
        ]
      },
      {
        number: 3, par: 4, yardage: 388,
        situation: `The 3rd plays 388 yards with a subtle dogleg left. The fairway is only 22 yards wide at the 250-yard mark, where trees squeeze in from both sides. There's no wind today — a rare calm on the Monterey Peninsula.`,
        choices: [
          {
            label: '3-wood for precision',
            detail: 'Take 3-wood — lands at 228 yards, leaving 160 yards. A controlled 7-iron approach to a green you can attack.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 25, caddieText: `3-wood, fairway, 7-iron to 11 feet. Read it left-to-right, drained it. Birdie. This is what hitting the fairway on purpose gets you.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `3-wood found the short grass, 7-iron to 18 feet. Misread the break. Two putts for par. Right play, one missed read. You'll take it.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `3-wood, fairway, 7-iron short of the green. Chip to 10 feet. Missed the par putt. Bogey. On a calm day you should be making more of these.` }
            ]
          },
          {
            label: 'Driver aimed at the right side',
            detail: 'Trust your driver and aim for the right half of the fairway, trying to thread the gap.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 10, caddieText: `Hit it a bit left of where you aimed and found the fairway by 2 feet. Lucky. Wedge to 12 feet, made the par putt. Don't tell anyone that worked.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `Right rough, as expected. Ball sat down. Punched it out 60 yards sideways, wedge to 22 feet. Missed the par putt left. Bogey. The narrow fairway was trying to warn you.` },
              { outcome: 'double', score: 2, weight: 55, caddieText: `Right rough, buried in the tall grass. Hacked it into the trees. Punched out. Wedge to 30 feet. Three-putted. Double bogey. The 3-wood leaves you in the fairway. Literally every time.` }
            ]
          },
          {
            label: 'Driver straight down the middle',
            detail: 'Grip and rip — 280 yards leaves just 108 yards, a soft wedge. Maximum birdie potential.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `Flushed it dead center, 108 yards. Sand wedge to 7 feet and drained it. Birdie. Got away with the driver AND made birdie. Not sustainable, but fun.` },
              { outcome: 'par',    score:  0, weight: 40, caddieText: `Found the fairway narrowly. 108 yards left, sand wedge over the back of the green. Chip to 10 feet. Made the par putt. Driver worked — barely.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `Driver flew the fairway into the first cut right. Restricted stance, wedge came out heavy. Chip to 14 feet. Missed. Bogey. The 3-wood was the play and you knew it.` }
            ]
          }
        ]
      },
      {
        number: 4, par: 4, yardage: 331,
        situation: `The 4th at Pebble Beach is a short, sharp par 4 at 331 yards. OB stakes line the entire right side, and the green is well-guarded with a drop-off left. A left-to-right breeze is blowing. The green is theoretically driveable — but so is the OB.`,
        choices: [
          {
            label: 'Driver with a hard draw — go for the green',
            detail: `Try to drive the green with a big draw. 331 yards, wind is left-to-right — you'd need to fight it the whole way.`,
            outcomes: [
              { outcome: 'par',    score:  0, weight:  8, caddieText: `Drew it perfect, hit the front of the green, rolled to 22 feet. Two putts. Par. You drove the green at Pebble hole 4. Completely insane. It worked.` },
              { outcome: 'bogey', score:  1, weight: 32, caddieText: `Overdrew it, went through the green into a swale left. Chip to 12 feet. Missed the par save. Bogey. The OB was on your right and you somehow found the drop-off on the left.` },
              { outcome: 'double', score: 2, weight: 60, caddieText: `OB right. Drop, wedge, two putts. Double bogey. Golf gives you what you deserve.` }
            ]
          },
          {
            label: '3-wood, leave a wedge in',
            detail: '3-wood carries 250 yards, leaving 81 yards. OB completely eliminated. A comfortable wedge distance.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 30, caddieText: `3-wood to 81 yards, wedge to 4 feet. Drained it. Birdie.` },
              { outcome: 'par',    score:  0, weight: 50, caddieText: `3-wood to 81 yards, wedge to 6 feet — and then you missed the birdie putt. Left edge, never had a chance. Tap-in par. This is golf.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `3-wood to 81 yards, wedge came out heavy — rolled to 22 feet. Three-putted. Bogey. Three putts from 22 feet. That one's on you.` }
            ]
          },
          {
            label: 'Hybrid, leave a full approach',
            detail: 'Hybrid carries 230 yards, leaving 101 yards — a controlled 9-iron into the green.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 10, caddieText: `Hybrid to 101 yards, 9-iron to 8 feet. Made the birdie putt. The extra distance to think about it didn't hurt you today.` },
              { outcome: 'par',    score:  0, weight: 45, caddieText: `Hybrid to 101 yards, 9-iron to 18 feet. Two putts. Par. Clean and simple.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `Hybrid to 101 yards, 9-iron a bit thin — ran through the back. Chip to 14 feet. Missed. Bogey.` }
            ]
          }
        ]
      },
      {
        number: 5, par: 3, yardage: 166,
        situation: `The 5th plays 166 yards to a green perched above the Pacific Ocean. Today there's a 15mph wind straight into your face. The green slopes back-to-front and there's a deep bunker right. Miss long and you're in thick rough. Your 7-iron goes 170, your 9-iron goes 150.`,
        choices: [
          {
            label: '6-iron to the center of the green',
            detail: 'Club up two clubs for the wind. A 6-iron into this headwind plays to about 168 yards. Aim center, no heroics.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 20, caddieText: `6-iron, center green, 14 feet below the hole. Read the break right, drained it. Birdie on a tough par 3. The right club and the right target made this look easy.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `6-iron was exactly right — center green, 18 feet below the hole. First putt ran 3 feet past. Made the comebacker. Par. Take it.` },
              { outcome: 'bogey', score:  1, weight: 25, caddieText: `6-iron hit center green but the back-to-front slope sent it to the front edge, 35 feet away. Three-putted. Bogey. Right club, right target — the slope had other plans.` }
            ]
          },
          {
            label: '7-iron straight at the flag',
            detail: 'Your 7-iron goes 170 yards. The flag is 166. Feels like plenty of club.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 10, caddieText: `7-iron caught the sweet spot and somehow fought through the wind, landed the front edge and released to 14 feet. Two putts. Par. That shouldn't have worked at all.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `7-iron came up 15 yards short — headwind turned it into a 150-yard club. Chip from the front rough to 12 feet. Missed the par putt. Bogey.` },
              { outcome: 'double', score: 2, weight: 55, caddieText: `7-iron plugged in the front bunker — into a 15mph headwind that club was never making the green. Blasted to 20 feet. Three-putted. Double bogey. The 6-iron was right there.` }
            ]
          },
          {
            label: '9-iron punch shot, keep it under the wind',
            detail: 'Hit a low punch with 9-iron to keep it under the wind and let it release onto the front of the green.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 25, caddieText: `Punch 9-iron stayed low, released up to 15 feet. Made the par putt. Hitting it below the wind and taking what the hole gives you is always a legitimate strategy.` },
              { outcome: 'bogey', score:  1, weight: 50, caddieText: `Punch 9-iron rolled to the front of the green — 40 feet away. Decent lag but left it 6 feet short. Missed the par putt. Bogey. Creative shot, not enough club.` },
              { outcome: 'double', score: 2, weight: 25, caddieText: `Punch 9-iron came up in the rough short of the green. Chip ran too far past, 18 feet. Three-putted. Double bogey. On a 166-yard par 3 into a headwind, the answer is always more club.` }
            ]
          }
        ]
      },
      {
        number: 6, par: 5, yardage: 513,
        situation: `Hole 6 plays uphill into the prevailing wind — 513 yards, 12mph headwind. You've hit driver 275 yards and have 238 yards uphill to a green guarded by a deep left bunker. Your 5-wood carries 220 in calm air.`,
        choices: [
          {
            label: 'Lay up to 70 yards — 9-iron then wedge',
            detail: '9-iron for 150 yards, leaving 88 yards — within wedge range. Set up the scoring shot you own.',
            outcomes: [
              { outcome: 'eagle',  score: -2, weight:  2, caddieText: `9-iron to 88 yards, hit the wedge — holed it. Eagle on an uphill par 5 into a headwind. You are statistically insane. Tell everyone you know.` },
              { outcome: 'birdie', score: -1, weight: 28, caddieText: `Laid up to 88 yards. Wedge to 5 feet. Made it. Birdie on an uphill par 5 into the wind. Smart golf beats hero golf nine times out of ten.` },
              { outcome: 'par',    score:  0, weight: 48, caddieText: `Laid up to 88 yards. Wedge to 14 feet. Misread it. Par. On an uphill par 5 into the wind, par is perfectly fine. The layup was right.` },
              { outcome: 'bogey', score:  1, weight: 22, caddieText: `Laid up well but hit the wedge a bit heavy — came up short. Chip to 16 feet. Missed the par putt. Bogey. The plan was right. The wedge wasn't quite right.` }
            ]
          },
          {
            label: '5-wood at the green',
            detail: 'Try to reach in two. Uphill into headwind, your 5-wood plays to about 195 yards — well short of the green.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  8, caddieText: `Somehow flushed the 5-wood uphill into the wind — hit the front edge and rolled on. 30 feet away. Two putts. Par. That shot had no business working. But here we are.` },
              { outcome: 'bogey', score:  1, weight: 42, caddieText: `5-wood came up 40 yards short in the left rough. Wedge to 20 feet. Missed the par putt. Bogey. Uphill plus headwind plus 238 yards was never going to work.` },
              { outcome: 'double', score: 2, weight: 50, caddieText: `5-wood into a headwind, uphill. It barely cleared the rough 200 yards out. Still had 40 yards, hit a poor chip, three-putted. Double bogey. The layup to 70 yards was always right.` }
            ]
          },
          {
            label: '7-iron to exactly 68 yards',
            detail: 'Hit 7-iron for 170 yards, leaving exactly 68 yards — your wedge zone. Clean and precise.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 22, caddieText: `7-iron to 68 yards, wedge to 4 feet. Drained it. Precise layup to your best number, precise wedge. Birdie. This is how par 5s are supposed to work.` },
              { outcome: 'par',    score:  0, weight: 48, caddieText: `7-iron to 68 yards, wedge to 15 feet. Caught the right lip on the birdie putt. Par. The process was right. The lip is just the lip.` },
              { outcome: 'bogey', score:  1, weight: 30, caddieText: `7-iron left 68 yards, but the wedge came out thin and ran 12 feet past. Missed the par putt. Bogey. 68 yards is your yardage. Today the execution wasn't.` }
            ]
          }
        ]
      },
      {
        number: 7, par: 3, yardage: 106,
        situation: `The iconic 7th hole at Pebble Beach — 106 yards straight down to a tiny green perched above the cliffs of Stillwater Cove. The Pacific frames the entire scene. Today the wind is 20mph off the ocean, quartering left-to-right and slightly into your face. The green is the size of a living room, with sheer drops on three sides.`,
        choices: [
          {
            label: 'Half-punch 9-iron, aim left of the flag',
            detail: 'Club down, swing at 70%. Start it left of center and let the quartering breeze bring it right. Keep the ball low.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 28, caddieText: `Half-punch 9-iron, started left, wind brought it back — 8 feet. Drained it. Birdie on the 7th at Pebble. Most people make five here without even trying.` },
              { outcome: 'par',    score:  0, weight: 52, caddieText: `Half-punch landed center-left, trickled to 18 feet. Hit a solid two-putt. Par on the 7th at Pebble Beach in a 20mph crosswind. Perfectly acceptable.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Half-punch was good but the wind gusted at impact and pushed it right — chip from the fringe to 8 feet. Missed the par putt. Bogey. The wind moved the ball at the last second. Nothing you could do.` }
            ]
          },
          {
            label: 'Pitching wedge, full swing at the flag',
            detail: 'Full pitching wedge (125 yards) straight at the pin. The wind should bring it back into the green.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 15, caddieText: `Full swing ballooned — but the wind actually helped it settle onto the right fringe. Chip to 8 feet. Made the par putt. You got extremely lucky and you know it.` },
              { outcome: 'bogey', score:  1, weight: 50, caddieText: `Full swing ballooned into the crosswind and went hard right, off the green. Nervy chip, 12 feet. You were so relieved it wasn't in the ocean you hit the putt too hard. Bogey.` },
              { outcome: 'double', score: 2, weight: 35, caddieText: `Full swing into a 20mph crosswind — the ball went right and over the cliff. Drop zone, chip, two putts. Double bogey. Never swing full into a crosswind on this hole. Never.` }
            ]
          },
          {
            label: '9-iron full swing straight at the pin',
            detail: 'Full 9-iron (150 yards) aimed directly at the flag. Plenty of club — give yourself a landing buffer.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  8, caddieText: `Full 9-iron — way too much club in this wind — but the ball ballooned and somehow came back down on the back edge of the green. Two putts for par. You have no idea how that happened.` },
              { outcome: 'bogey', score:  1, weight: 32, caddieText: `Full 9-iron ballooned into the crosswind, barely stayed on the green — right fringe, awful lie. Three to get down. Bogey. 106 yards is not a 9-iron. Not in this wind.` },
              { outcome: 'double', score: 2, weight: 60, caddieText: `Full 9-iron from 106 yards into a 20mph crosswind drifted hard right and went over the cliff into the Pacific. Drop zone, chunked the chip. Double bogey. Pebble's 7th only cares that you controlled it. You did not.` }
            ]
          }
        ]
      },
      {
        number: 8, par: 4, yardage: 418,
        situation: `The 8th hole at Pebble Beach is one of the most dramatic in golf — a blind tee shot over a chasm to a fairway that doglegs left along the cliffs, the Pacific 100 feet below on your right. You've driven it well: 275 yards, 143 yards left to the flag. The pin is tucked right behind a greenside bunker. The ocean is still in play right.`,
        choices: [
          {
            label: '9-iron to the left half of the green',
            detail: 'Miss left, miss safe. Aim for the middle-left of the green — takes the bunker and ocean out of play entirely.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 20, caddieText: `9-iron to the left half, 22 feet. Read the putt correctly and drained it. Birdie. Aiming away from the flag and making birdie anyway — that's playing smart golf.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `9-iron to the left half — 26 feet away. Two solid putts for par. Avoided the ocean, avoided the bunker, made par. The miss always goes left on this hole.` },
              { outcome: 'bogey', score:  1, weight: 25, caddieText: `9-iron left, 28 feet — but the lag was 5 feet short and the par putt shaved the edge. Bogey. Correct aim, poor pace on the first putt.` }
            ]
          },
          {
            label: '9-iron straight at the flag',
            detail: `Attack the right-side pin directly. 143 yards, 9-iron distance — flush it and you're looking at a tap-in birdie.`,
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 12, caddieText: `Aimed right at the flag, hit it pure to 7 feet. Drained the birdie putt. Aggressive play, perfect execution. The bunker and the ocean were both wrong today.` },
              { outcome: 'par',    score:  0, weight: 28, caddieText: `Aimed at the flag, caught the green edge right — 18 feet away. Two putts for par. Got away with the aggressive line. Lucky. The miss has to go left on this hole.` },
              { outcome: 'bogey', score:  1, weight: 60, caddieText: `9-iron caught the bunker by one foot. Blasted to 15 feet. Missed the par save. Bogey. The ocean is right there, the bunker is right there, and the miss has to go left on this hole. Always.` }
            ]
          },
          {
            label: '7-iron to the center of the green',
            detail: 'Take extra club, keep it below the hole, land it center-green and let the slope release it toward the flag.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 25, caddieText: `7-iron to center-green, released down toward the flag — 10 feet. Drained it. Birdie. Taking the extra club and letting the slope work is genuinely the most attacking play on this hole.` },
              { outcome: 'par',    score:  0, weight: 48, caddieText: `7-iron to center, released toward the flag — 16 feet. Hit a solid putt but it slid left. Par. Correct play. The putt just didn't go.` },
              { outcome: 'bogey', score:  1, weight: 27, caddieText: `7-iron went a touch long — through the back of the green. Chip to 12 feet. Missed the par putt right. Bogey. Extra club from 143 yards on a firm green needs to land before the flag. Not at it.` }
            ]
          }
        ]
      },
      {
        number: 9, par: 4, yardage: 464,
        situation: `Hole 9 is a long par 4 at 464 yards running alongside Stillwater Cove — the ocean is on your right the entire length of the hole. A 15mph tailwind is helping today. The fairway tilts toward the ocean on the right side.`,
        choices: [
          {
            label: 'Driver down the left side',
            detail: 'Start it at the left rough edge and let it work back to center. Eliminates the right-side tilt. Leaves ~185 yards.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 28, caddieText: `Driver down the left, tailwind added carry — 184 yards left. Flushed a 7-iron to 11 feet. Made the birdie putt. Playing left when the wrong side is the ocean is not complicated.` },
              { outcome: 'par',    score:  0, weight: 52, caddieText: `Driver down the left, 184 yards left. 7-iron to 18 feet — two putts for par. Right decision, right shot, right result. Just couldn't convert the birdie look.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Driver left as planned, but the 7-iron was a touch thin and ran through the back of the green. Chip to 14 feet. Missed. Bogey. The tee shot was right. The iron let you down.` }
            ]
          },
          {
            label: 'Driver at the center of the fairway',
            detail: 'Hit it straight and let the tailwind carry it. Could leave only 165 yards — a half-9-iron.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 18, caddieText: `Aimed center, somehow the fairway tilt didn't grab it — found the short grass. 165 yards, 9-iron to 14 feet. Made the par putt. Got away with the line. Don't trust that slope again.` },
              { outcome: 'bogey', score:  1, weight: 47, caddieText: `Aimed center, tilt ran it right toward the cove — rough along the water. Restricted lie, punched out, wedge to 25 feet. Three-putted. Bogey. The slope was telling you where to aim.` },
              { outcome: 'double', score: 2, weight: 35, caddieText: `Aimed center, tilt ran it right into the rough at the water's edge. Unplayable. Drop. Still had 120 yards. Wedge short, chip, two putts. Double bogey. The fairway tilts right. You knew that.` }
            ]
          },
          {
            label: '3-wood down the center',
            detail: 'Play safe, 230 yards, leaves 234 yards. A hybrid or long iron second shot, well away from the ocean.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 40, caddieText: `3-wood to center, hybrid to the front edge, two putts for par. Nothing went wrong. Nothing went right. Par on a 464-yard par 4 — that's fine.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `3-wood safe, hybrid second to 35 feet. Hit a poor lag 8 feet past. Missed the par putt. Bogey. The tailwind made this a birdie hole today and you played it like a survival hole.` },
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `3-wood, hybrid to 12 feet. Made the birdie putt. Sometimes laying back and hitting a better second shot works out better than a hero driver. Today it did.` }
            ]
          }
        ]
      },
      {
        number: 10, par: 4, yardage: 446,
        situation: `The 10th begins the famous Pebble Beach cliff stretch. 446 yards, slightly uphill, 12mph into your face. You've hit driver 275 yards and have 171 yards to the flag. The green is on a shelf above the cliff; anything short-right falls away toward the Pacific.`,
        choices: [
          {
            label: '6-iron to the center of the green',
            detail: 'Two clubs extra for the wind. 6-iron into a 12mph headwind plays to about 175 yards. Aim center, not at the flag.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 18, caddieText: `6-iron, center green, 16 feet. Read the putt right. Birdie on one of Pebble's hardest stretches. Two clubs extra for the wind and a confident stroke — that's the recipe.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `6-iron hit center green, 22 feet away. Came up 2 feet short on the par putt — you decelerated and you knew it. Tapped in. Par. Right club selection saved you here.` },
              { outcome: 'bogey', score:  1, weight: 27, caddieText: `6-iron was right but the headwind still held it up — came up 8 feet short of the shelf face. Awkward chip, 10 feet. Missed. Bogey. Might've needed 5-iron today.` }
            ]
          },
          {
            label: '7-iron at the flag',
            detail: `Your 7-iron goes 170 yards — close enough to the hole's yardage. Take it straight at the pin.`,
            outcomes: [
              { outcome: 'par',    score:  0, weight: 12, caddieText: `7-iron somehow fought through the wind and found the front of the green — 28 feet away. Good lag and tapped in. Par. That shot had no business making the green.` },
              { outcome: 'bogey', score:  1, weight: 48, caddieText: `12mph headwind turned your 7-iron into a 150-yard club. Ball came up short on the shelf face — tough chip, 18 feet. Missed the par putt. Bogey. Book yardage isn't wind-adjusted yardage.` },
              { outcome: 'double', score: 2, weight: 40, caddieText: `7-iron dropped off the shelf toward the cliff on the right. Had to take a penalty. Wedge from drop zone, two putts. Double bogey. The headwind adds 20 yards to this hole. The 6-iron was always the club.` }
            ]
          },
          {
            label: '7-iron at maximum effort',
            detail: 'Swing harder than normal to fight through the wind and squeeze 185 yards out of your 7-iron.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  5, caddieText: `Swung out of your shoes and somehow flushed it 180 yards into the wind. Front of the green, 30 feet. Two putts. Par. That was lucky and everyone watching knew it.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `Hard 7-iron ballooned in the headwind — went 152 yards and landed short of the shelf. Chip to 15 feet. Missed. Bogey. Swinging harder adds spin, which makes the ball balloon more. Every time.` },
              { outcome: 'double', score: 2, weight: 60, caddieText: `Max-effort 7-iron spun up into the headwind and fell off the right side of the shelf toward the cliff. From a near-unplayable lie you couldn't advance it cleanly. Double bogey. More club, same swing. Tattooed in every caddie's brain.` }
            ]
          }
        ]
      },
      {
        number: 11, par: 4, yardage: 380,
        situation: `Hole 11, par 4, 380 yards. You've pushed driver into the right rough — semi-blocked lie in 4-inch rough, 164 yards to the flag. A tree branch is in your swing path if you go straight at the pin.`,
        choices: [
          {
            label: 'Punch out to 70 yards — take your medicine',
            detail: 'Aim left of the branch, punch 9-iron low to the fairway. Lands at 94 yards — close to wedge range.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `Punched to 94 yards, hit your wedge to 4 feet. Drained the birdie putt. Taking your medicine and then making birdie is the best feeling in golf.` },
              { outcome: 'par',    score:  0, weight: 58, caddieText: `Punched to 94 yards. Wedge to 5 feet. Made the par putt. Par from the rough, with a tree in your backswing. That's called scrambling. It's underrated.` },
              { outcome: 'bogey', score:  1, weight: 27, caddieText: `Punched to 94 yards. Hit the wedge well but left it 12 feet short of the hole. Missed the par putt. Bogey. You made the right decision — just needed a better wedge.` }
            ]
          },
          {
            label: 'Power through the rough at the flag',
            detail: 'Aim just left of the branch and muscle a hard 7-iron through the rough at the green.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  5, caddieText: `Muscled it through the rough, the branch deflected it but somehow not enough to matter — hit the green, 22 feet. Two putts. Par. That was dumb and it worked. Don't count on it.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `Tried to muscle through 4-inch rough toward a branch. The ball squirted sideways 40 yards. Wedge, two putts. Bogey. Deep rough plus blocked lie plus long iron is a formula for sideways.` },
              { outcome: 'double', score: 2, weight: 60, caddieText: `Branch caught your follow-through. Ball squirted into a bunker. Blasted to 18 feet. Three-putted. Double bogey. The rough was telling you to lay up. The branch was also telling you. You ignored both.` }
            ]
          },
          {
            label: 'Wedge punch to 120 yards',
            detail: 'Short punch shot to get back in play, leaving a full pitching wedge approach.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 30, caddieText: `Punched to 120 yards. Pitching wedge to 12 feet. Made the par putt. Not the most efficient route but the ball went in the hole eventually.` },
              { outcome: 'bogey', score:  1, weight: 50, caddieText: `Punched to 120 yards — not your sharpest yardage. Pitching wedge to 24 feet. Hit the par putt too soft. Bogey. 70 yards is a different shot for you than 120 is.` },
              { outcome: 'double', score: 2, weight: 20, caddieText: `Punched out but the ball sat in a divot at 120 yards. Pitching wedge came out heavy, short. Chip to 15 feet. Three-putted. Double bogey. From that rough lie, 70 yards is always the better number.` }
            ]
          }
        ]
      },
      {
        number: 12, par: 3, yardage: 202,
        situation: `The 12th is a par 3 at 202 yards over a stretch of beach to a wide green that slopes gently back-to-front. Today there's almost no wind — a rare calm on the Monterey Peninsula.`,
        choices: [
          {
            label: '4-iron at the back pin',
            detail: 'Pin is back-left. Take 4-iron and attack the flag directly on this rare calm day.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 28, caddieText: `4-iron at the back pin — pure. Dropped 2 feet short and trickled to tap-in range. Birdie. On a calm day you attacked correctly. On any other Pebble day you're not going near that flag.` },
              { outcome: 'par',    score:  0, weight: 52, caddieText: `4-iron at the back flag, hit center-left, 20 feet away. Two putts for par. Calm conditions, correct club, correct target. The putt just didn't fall.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `4-iron at the flag caught the top of the slope and released off the back of the green. Chip to 12 feet. Missed. Bogey. Aggressive target on a sloped green — landing too close to the flag has consequences.` }
            ]
          },
          {
            label: '5-iron to the center of the green',
            detail: 'On a calm day, pure distance: 5-iron carries about 200 yards. Aim center, make par, move on.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `5-iron to center, released toward the back-left flag — 12 feet. Made it. Sometimes center-green birdie putts fall. Par is fine. Birdie is better.` },
              { outcome: 'par',    score:  0, weight: 60, caddieText: `5-iron to center-green, 22 feet. Two putts for par. On a 202-yard par 3, par is par. Nothing wrong happened. Nothing particularly right happened either.` },
              { outcome: 'bogey', score:  1, weight: 25, caddieText: `5-iron to center-green, 22 feet. Three-putted — first one ran 5 feet past downhill. Missed the comebacker. Bogey. Three putts on a wide green on a calm day. Those are the ones that hurt later.` }
            ]
          },
          {
            label: '6-iron with extra effort',
            detail: 'Swing hard with 6-iron to squeeze out 202 yards. The beach is only in play short.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 12, caddieText: `Hard 6-iron caught the sweet spot and somehow carried all 202 yards — right edge of the green, 28 feet. Two putts. Par. That's the luckiest swing of the day.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `Hard 6-iron flared right — rough lie, poor chip, missed the par putt. Bogey. Swinging harder adds inconsistency. The 5-iron at normal swing speed was the play.` },
              { outcome: 'double', score: 2, weight: 43, caddieText: `Hard 6-iron went right into the rough short of the green. Got fancy with a flop shot — it came out thin and rolled to 20 feet. Three-putted. Double bogey. On a calm day, the right club makes your normal swing.` }
            ]
          }
        ]
      },
      {
        number: 13, par: 4, yardage: 399,
        situation: `The 13th is a dogleg-left par 4 at 399 yards. You've hit a great drive to the left side of the fairway — 139 yards to the flag. The pin is tucked front-left behind a deep pot bunker.`,
        choices: [
          {
            label: 'Knock-down 8-iron, center of the green',
            detail: 'Flight a low 8-iron to center-green. It lands firm, releases toward the front-left flag.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 28, caddieText: `Knock-down 8-iron landed firm and trickled toward the flag — 9 feet. Straight putt. Drained it. Birdie. The pot bunker never came into play because you never gave it a chance.` },
              { outcome: 'par',    score:  0, weight: 52, caddieText: `Knock-down 8-iron to center, released to 18 feet. Hit a solid putt that broke more than you thought. Two putts for par. Right target, decent putt, wrong read.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Knock-down 8-iron caught a bit thin, hit the front fringe. Chip to 12 feet. Missed the par putt. Bogey. The shot was right, the strike was slightly off. That's the difference at 139 yards.` }
            ]
          },
          {
            label: '9-iron to the right half of the green',
            detail: 'Miss right, miss safe — 9-iron at the right half takes the bunker completely out of play.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `9-iron to the right half — 20 feet away. Hit a nice left-to-right breaking putt that fell in. Birdie. The safe play and a good read. Best of both worlds.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `9-iron to the right half — bunker never in play. 22 feet. Two putts for par. Smart play, smart score. The pros call this course management.` },
              { outcome: 'bogey', score:  1, weight: 30, caddieText: `9-iron right side, 24 feet. Hit a decent first putt but left it 4 feet short and the par putt slid by. Bogey. The aim was right — just couldn't two-putt from 24 feet.` }
            ]
          },
          {
            label: '9-iron straight at the flag',
            detail: `Attack the front-left pin directly. 139 yards, 9-iron — if you flush it, it's birdie range.`,
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 10, caddieText: `9-iron at the flag caught the green 3 feet right of the bunker edge and released to 8 feet. Made the birdie putt. Got away with the aggressive line completely.` },
              { outcome: 'bogey', score:  1, weight: 45, caddieText: `9-iron at the sucker flag found the pot bunker by 2 feet. Blasted to 12 feet. Missed the par save. Bogey. The sucker flag has been doing this since 1919.` },
              { outcome: 'double', score: 2, weight: 45, caddieText: `9-iron went left of the flag into the pot bunker — you can barely swing in a Pebble pot bunker. Blasted into the rough, chip, two putts. Double bogey. The right half of the green was always the play.` }
            ]
          }
        ]
      },
      {
        number: 14, par: 5, yardage: 573,
        situation: `The 14th is the longest hole at Pebble Beach — 573 yards. You've hit driver 280 yards, leaving 293 yards. Wind is cross-left-to-right at 10mph. The fairway is generous, but the approach into the green is well-guarded.`,
        choices: [
          {
            label: 'Calibrated layup to 70 yards',
            detail: 'Calculate precisely: hybrid or 5-iron for 223 yards leaves exactly 70 yards for your money wedge. Know your number.',
            outcomes: [
              { outcome: 'eagle',  score: -2, weight:  2, caddieText: `Calibrated to 73 yards, hit the wedge — it went in. Eagle on the longest hole at Pebble Beach. This is the greatest thing you have ever done.` },
              { outcome: 'birdie', score: -1, weight: 30, caddieText: `Calibrated layup to exactly 73 yards. Money wedge to 5 feet. Made the putt. Birdie. Not because you were long. Because you were precise.` },
              { outcome: 'par',    score:  0, weight: 48, caddieText: `Layup to 73 yards, wedge to 14 feet. Hit a good putt that caught the right lip and spun out. Par. The process was right. The lip is just the lip.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Layup to 73 yards, wedge came out a little heavy — 8 feet past. Missed the par putt. Bogey. Right process, wrong pace on the wedge. Those 8 extra feet cost you a stroke.` }
            ]
          },
          {
            label: '3-wood as far as possible',
            detail: 'Hit 3-wood for max distance, leaving ~55 yards. Gets you close to birdie range on the third.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 12, caddieText: `3-wood 242 yards into the cross-wind — perfect line. 51 yards left, hit the wedge to 6 feet. Made birdie. Maximum distance to a great yardage. It happens.` },
              { outcome: 'par',    score:  0, weight: 38, caddieText: `3-wood 240 yards but the crosswind pushed it into the first cut — 53 yards, bad lie. Hit a decent wedge to 16 feet. Two putts. Par. The rough cost you a clean third shot.` },
              { outcome: 'bogey', score:  1, weight: 50, caddieText: `3-wood caught the crosswind and ended up in the right rough — bad lie, 53 yards. Wedge came out hot, 12 feet past. Missed. Bogey. Max distance into a crosswind rarely leaves your best yardage.` }
            ]
          },
          {
            label: 'Two-stage layup: iron, then wedge to set up',
            detail: 'Conservative iron to 180 yards out, then a precise wedge to your 70-yard zone before attacking.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 38, caddieText: `Iron to 180, wedge to 70 yards — clean execution. Hit the wedge to 10 feet. Two putts for par. Very methodical. Very safe. One stroke more than it needed to be.` },
              { outcome: 'bogey', score:  1, weight: 42, caddieText: `Two-stage layup worked, got to 70 yards — but that was your FOURTH shot to a par 5 green. Wedge to 12 feet. Missed. Bogey. One good second shot to 70 yards is all you need.` },
              { outcome: 'double', score: 2, weight: 20, caddieText: `Iron came up in a divot at 180 yards. Second wedge to 70 yards. Money wedge to 14 feet. Three-putted. Double bogey on a par 5 where birdie is available with proper management.` }
            ]
          }
        ]
      },
      {
        number: 15, par: 4, yardage: 397,
        situation: `The 15th is a par 4 at 397 yards, 10mph into your face. You've hit a solid drive to 270 yards, leaving 127 yards. Pin is middle-right. There's a bunker short-right and the green is running firm today.`,
        choices: [
          {
            label: '9-iron to a landing spot short of the flag',
            detail: 'Play 9-iron to 10 yards short of the flag and let the firm green release the ball toward the hole.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 25, caddieText: `9-iron to 10 yards short — released to 6 feet. Drained the birdie putt. Reading firm greens and using them instead of fighting them is a legitimate skill. You have it today.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `9-iron short of the flag, released to 14 feet. Hit a decent putt that slid by the right edge. Par. Right read on the firm green, one missed putt. That's golf.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `9-iron short, but released too far — 24 feet past the flag. Firm green took it further than expected. Missed the lag by 4 feet. Bogey. The release idea was right, the distance control wasn't.` }
            ]
          },
          {
            label: 'Pitching wedge directly at the flag',
            detail: 'Take pitching wedge (115 yards), flight it high, try to stop it near the flag from 127 yards.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 10, caddieText: `Pitching wedge checked up 6 feet short of the flag. Made the birdie putt. A bit short of the yardage with a high wedge on a firm green — but the ball cooperated today.` },
              { outcome: 'par',    score:  0, weight: 42, caddieText: `Pitching wedge checked to 14 feet — decent shot from 127 yards with the wrong club. Hit a par putt that slid by. Par. A 9-iron to the right landing spot would have given you a closer look.` },
              { outcome: 'bogey', score:  1, weight: 48, caddieText: `Pitching wedge from 127 yards checked up and spun off the firm green into the right bunker. Blasted to 18 feet. Two putts. Bogey. The right club for 127 yards is not the sand wedge at full effort.` }
            ]
          },
          {
            label: 'Sand wedge at full effort',
            detail: 'Swing your sand wedge hard to reach 127 yards. Try to stop it dead on a firm green.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  8, caddieText: `Hard sand wedge somehow came out soft — landed softly 10 feet from the flag. Made the par putt. That was a mistake that worked out. Don't learn the wrong lesson.` },
              { outcome: 'bogey', score:  1, weight: 42, caddieText: `Hard sand wedge from 127 yards hit, checked, spun back 8 yards short. Chip to 15 feet. Missed. Bogey. Full-swing sand wedges on firm greens grab and spin. Every time.` },
              { outcome: 'double', score: 2, weight: 50, caddieText: `Hard sand wedge hit, checked violently, spun off the green into the right bunker. Blasted over the green. Chip back, three putts total. Double bogey. The 9-iron for 127 yards is not a difficult concept.` }
            ]
          }
        ]
      },
      {
        number: 16, par: 4, yardage: 402,
        situation: `Hole 16 is a sweeping left-to-right dogleg par 4 at 402 yards. Wind is blowing right-to-left today. The inside of the dogleg has trees. Cutting the corner means carrying 255 yards over the trees.`,
        choices: [
          {
            label: 'Driver up the left side, play the dogleg',
            detail: 'Aim left-center, play the full dogleg. 280-yard drive leaves ~122 yards for a soft pitching wedge.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 28, caddieText: `Driver up the left, 122 yards left, pitching wedge to 8 feet. Made it. Birdie. Playing the proper line on a dogleg with the wind at your back is almost always the right call.` },
              { outcome: 'par',    score:  0, weight: 52, caddieText: `Driver left, 122 yards, pitching wedge to 16 feet. Hit a good putt that slid right. Par. Right line, right club, wrong edge on the putt.` },
              { outcome: 'bogey', score:  1, weight: 20, caddieText: `Driver left, 122 yards — but the pitching wedge was a bit thin and ran through the back of the green. Chip to 14 feet. Missed. Bogey. The approach needed to land softer on a firm day.` }
            ]
          },
          {
            label: 'Driver to cut the corner over the trees',
            detail: 'Aim at the trees and carry 255 yards over them. Right-to-left wind is working against your natural fade.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  5, caddieText: `Hit a perfect draw over the trees — 80 yards left, great angle. Wedge to 10 feet. Two putts. Par. That was a perfect shot and it deserved better. But par counts.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `Came up 8 yards short of the trees — deflected hard left into the rough. Hacked out, wedge to 25 feet. Three-putted. Bogey. The shortcut requires 255 yards of carry. That's the whole problem.` },
              { outcome: 'double', score: 2, weight: 60, caddieText: `Hit the trees. Ball deflected into deep rough under the branches. Could only go sideways. Wedge to 30 feet. Three-putted. Double bogey. The corner-cut has a near-100% bogey-or-worse rate here. Always has.` }
            ]
          },
          {
            label: '3-wood to the wide part of the fairway',
            detail: '3-wood to the wide left section, leaving 160 yards for a 7-iron approach.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 12, caddieText: `3-wood to the wide fairway, 7-iron to 10 feet. Made the birdie putt. Laying back to 160 yards isn't exciting but it produced birdie today.` },
              { outcome: 'par',    score:  0, weight: 52, caddieText: `3-wood to the wide left, 7-iron to 20 feet. Two putts. Par. Nothing wrong. Nothing exciting. That's what the wide part of the fairway is for.` },
              { outcome: 'bogey', score:  1, weight: 36, caddieText: `3-wood to the wide fairway, 7-iron a touch fat — 28 feet short of the flag. Three-putted because the first one ran 6 feet past. Bogey. Driver up the left would have left pitching wedge instead of 7-iron.` }
            ]
          }
        ]
      },
      {
        number: 17, par: 3, yardage: 208,
        situation: `The 17th at Pebble Beach. 208 yards, the ocean hugging the entire left side, the green angled toward the water. Today: 18mph wind directly into your face. The flag is center-left. Jack Nicklaus hit a 1-iron here in 1972.`,
        choices: [
          {
            label: '3-wood aimed center-right of the green',
            detail: 'Take 3-wood (240+ yards in calm air) to fight the wind. Aim center-right — ocean completely out of play.',
            outcomes: [
              { outcome: 'birdie', score: -1, weight: 22, caddieText: `3-wood aimed center-right — into 18mph of headwind it played perfectly. Released toward the flag, 8 feet. Made the putt. Birdie on the 17th at Pebble. One of the best decisions you'll ever make on a golf course.` },
              { outcome: 'par',    score:  0, weight: 55, caddieText: `3-wood center-right, wind held it up slightly — 22 feet right of the flag. Two putts for par. On the 17th at Pebble in an 18mph headwind, par is birdie. You didn't find the ocean. That's the win.` },
              { outcome: 'bogey', score:  1, weight: 23, caddieText: `3-wood was right but the headwind held it up more than expected — front edge, 35 feet away. Three-putted because the first one was 8 feet short and you came up short on that too. Bogey. Process was right.` }
            ]
          },
          {
            label: '4-iron to the center of the green',
            detail: 'Forget the flag. 4-iron into the headwind plays to about 190 yards. Aim center-right, take par and move on.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 52, caddieText: `4-iron aimed right, stayed right. Center-right of the green, 20 feet. Two putts for par. On the 17th at Pebble Beach in this wind, walking off with par is winning. Full stop.` },
              { outcome: 'birdie', score: -1, weight: 15, caddieText: `4-iron center-right found a perfect spot — ball released toward the left flag to 12 feet. Made the birdie putt. Took the conservative line and made birdie anyway. Take it.` },
              { outcome: 'bogey', score:  1, weight: 33, caddieText: `4-iron was a touch short — hit the front of the green and released off the front edge into the fringe. Chip to 14 feet. Missed. Bogey. 18mph headwind added more than expected. 3-wood was the right club.` }
            ]
          },
          {
            label: '3-iron directly at the left-center flag',
            detail: `Take 3-iron and attack the flag. The ocean is left, but you're going for birdie.`,
            outcomes: [
              { outcome: 'par',    score:  0, weight:  5, caddieText: `Aimed at the flag, got extremely lucky — wind pushed it right at the last second and it found the green. 28 feet. Two putts. Par. The ocean was 4 feet away from your ball. Don't do that again.` },
              { outcome: 'bogey', score:  1, weight: 30, caddieText: `3-iron at the left-center flag, went left of where you aimed — barely stayed on the green left edge. Chip, 14 feet. Missed. Bogey. The flag was on the ocean side. You aimed at the ocean side.` },
              { outcome: 'double', score: 2, weight: 65, caddieText: `3-iron at the left-center flag. The ocean took your ball. This hole has been doing this since 1919. Drop zone, wedge on, two putts. Double bogey. The flag was on the ocean side. In an 18mph headwind. Into the ocean.` }
            ]
          }
        ]
      },
      {
        number: 18, par: 5, yardage: 543,
        situation: `The most famous finishing hole in golf. 543 yards hugging Stillwater Cove, the Pacific Ocean the entire left side from tee to green. Your drive of 278 yards left you on the right side of the fairway — 265 yards to the flag. Wind is 8mph off the ocean, left to right. The green is guarded on the left by the sea wall.`,
        choices: [
          {
            label: 'Lay up right, money wedge from 70 yards',
            detail: 'Precise layup to the right side at 70 yards. Ocean completely eliminated. Set up your closing wedge.',
            outcomes: [
              { outcome: 'eagle',  score: -2, weight:  2, caddieText: `Laid up to 70 yards. Hit the wedge — it went in. EAGLE to close Pebble Beach. You are going to tell this story for the rest of your life and nobody will ever believe you.` },
              { outcome: 'birdie', score: -1, weight: 32, caddieText: `Laid up right, ocean never in play. Money wedge to 5 feet. Made the closing birdie. You finished Pebble Beach the way it's supposed to be finished. Tom Watson did it this way. Now so did you.` },
              { outcome: 'par',    score:  0, weight: 45, caddieText: `Laid up to 70 yards, wedge to 14 feet. Misread the closing putt. Par to finish. Smart play to get there — the putt just didn't fall. Pebble keeps something back every time.` },
              { outcome: 'bogey', score:  1, weight: 21, caddieText: `Laid up to 70 yards, but the wedge was a little hot — 10 feet past. Missed the par putt left. Bogey to close. The plan was right. The closing wedge wasn't the shot you practiced.` }
            ]
          },
          {
            label: '3-wood at the green from 265 yards',
            detail: 'Go for the green in two. The ocean is left, but flush a 3-wood right and you could make eagle.',
            outcomes: [
              { outcome: 'par',    score:  0, weight:  5, caddieText: `3-wood drifted right, not left — caught the right side of the green. 35 feet. Two putts. Par. The cove let you live. Don't try that again.` },
              { outcome: 'bogey', score:  1, weight: 25, caddieText: `3-wood leaked slightly left, found the rough between the seawall and the green. Hit it to 18 feet. Missed the par putt. Bogey. Pebble 18 punishes the attempt even when it doesn't take your ball.` },
              { outcome: 'double', score: 2, weight: 70, caddieText: `3-wood at 265 yards with Stillwater Cove on the entire left side. It leaked left. The cove accepted it. Drop zone, onto the green in four, two putts. Double bogey. Pebble's 18th has been doing this since 1919. You were warned.` }
            ]
          },
          {
            label: 'Conservative layup to 120 yards',
            detail: '120-yard layup — well short of wedge distance but far from the ocean.',
            outcomes: [
              { outcome: 'par',    score:  0, weight: 45, caddieText: `Laid up to 120 yards, safe all the way. Wedge to 16 feet. Hit a good putt that curled off at the end. Par to finish. Clean. No drama. No Cove.` },
              { outcome: 'birdie', score: -1, weight: 20, caddieText: `120-yard layup, wedge to 8 feet. Made the birdie putt to close. A conservative layup to the wrong yardage made birdie anyway. Pebble gave you one.` },
              { outcome: 'bogey', score:  1, weight: 35, caddieText: `120-yard layup was safe but not your sharpest number. Pitching wedge to 20 feet. Three-putted the closing hole. Bogey to finish. 70 yards was right there. That's a stroke you don't get back.` }
            ]
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
