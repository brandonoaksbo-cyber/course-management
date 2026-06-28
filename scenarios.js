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
            caddieText: `That's how you play Pebble. You used the wind as your partner. Starting the ball at the left bunkers and letting the left-to-right breeze carry it back split the fairway perfectly — 97 yards left, your money wedge. Stuck it to 6 feet and made the birdie putt. Trust the wind, never fight it.`
          },
          {
            label: '3-wood to the center of the fairway',
            detail: 'Play conservatively — 230 yards to the heart of the fairway, leaving 147 yards for a 9-iron approach.',
            outcome: 'par',
            score: 0,
            caddieText: `Safe play, and it worked — 9-iron to 18 feet, two putts for par. Nothing wrong with that. But this hole is designed to give up birdies with a well-placed tee shot. You left a shot on the course. The opener at Pebble is a gift if you use the wind.`
          },
          {
            label: 'Driver, cut the dogleg right',
            detail: 'Try to cut the corner and shorten the approach. Thread it past the trees on the right.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The trees on the right at 250 are tighter than they look from the tee, and the left-to-right wind pushed you even further into them. Rough lie, restricted swing, punched out sideways, scrambled for bogey. Cutting doglegs works when wind is your ally — here it was working against you. The correct shape on this hole is using the wind, not fighting it.`
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
            outcome: 'birdie',
            score: -1,
            caddieText: `Classic course management. You turned a 222-yard problem into a 70-yard certainty. That wedge from 72 yards is the highest-percentage birdie shot in your bag — you hit it to 4 feet and made the putt. Great players don't try to be heroes on par 5s. They create the birdie look they want, not the one the hole forces on them.`
          },
          {
            label: '5-wood at the green',
            detail: 'Go for it in two. The headwind makes your 5-wood play like a 3-wood — you need 222 yards of carry to clear the bunker.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Into a 12mph headwind, your 5-wood was fighting uphill the whole way. Came up short, caught the front bunker. Blast out to 20 feet, two putts — bogey. The math never worked: 222 yards into a headwind is a tough 3-wood for a tour player. Know when the green isn't gettable, and take what the hole gives you.`
          },
          {
            label: '4-iron punch-and-run',
            detail: 'Hit a low punch to keep it under the wind. 200 yards — it might feed onto the front of the green.',
            outcome: 'par',
            score: 0,
            caddieText: `The punch worked — ball rolled up to the front edge, 35 feet from the hole. Two putts for par. Solid execution, but a risky shot when the safest play — 9-iron to your wedge yardage — would have given you a better birdie look. Par is fine. Birdie was right there.`
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
            outcome: 'birdie',
            score: -1,
            caddieText: `The right call. At 22 yards wide, this fairway punishes driver. Your 3-wood landed center of the short grass, leaving 160 yards — a pure 7-iron. Stuffed it to 7 feet and made the birdie. The principle: when the fairway is narrow, take the club you hit straight every time, not the club that goes furthest.`
          },
          {
            label: 'Driver aimed at the right side',
            detail: 'Trust your driver and aim for the right half of the fairway, trying to thread the gap.',
            outcome: 'bogey',
            score: 1,
            caddieText: `You faded it slightly more than intended and found the right rough. The trees blocked a clean line to the pin, so you punched out sideways, hit a wedge to 20 feet, and missed the par putt. Narrow fairways demand precision clubs. Your driver is your most powerful club — but also your most erratic. A 22-yard fairway is no place for it.`
          },
          {
            label: 'Driver straight down the middle',
            detail: 'Grip and rip — 280 yards leaves just 108 yards, a soft wedge. Maximum birdie potential.',
            outcome: 'par',
            score: 0,
            caddieText: `You got away with it — driver found the fairway, left a 108-yard wedge. Hit it to 18 feet and missed the birdie. Lucky. The trees at 255 yards make this a real miss rate with driver when you're swinging hard. The 3-wood gives you the same approach range with dramatically better fairway percentage. "It worked" doesn't mean the process was right.`
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
            caddieText: `Drawing driver on a 331-yard hole into a left-to-right wind, with OB right, is the highest-risk play in golf. You overcorrected the draw, it ran through the green and into a deep swale left. Tough up-and-down, couldn't convert — double bogey. This hole is a trap for gamblers. The right play was never driver.`
          },
          {
            label: 'Hybrid to 70 yards',
            detail: 'Take a controlled hybrid — lands at 261 yards, leaving 70 yards. Your money wedge from a safe position.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Perfect. You treated this like a par 3.5. Hybrid to 70 yards, money wedge to 5 feet, birdie putt drops. On short par 4s with OB, the goal is to eliminate the big number and create your best birdie opportunity. Your 70-yard wedge is a weapon — this is exactly when to use it.`
          },
          {
            label: '3-wood to 120 yards',
            detail: 'Conservative 3-wood to 120 yards. Safe, leaves a pitching wedge distance approach.',
            outcome: 'par',
            score: 0,
            caddieText: `Solid par — pitching wedge to 15 feet, two putts. But 120 yards isn't your best yardage, 70 yards is. Taking one more club off the tee (hybrid) and landing at 70 yards would have set up a much higher birdie percentage. Par is fine; birdie was a better option than you gave yourself.`
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
            outcome: 'birdie',
            score: -1,
            caddieText: `Exactly right. The 15mph headwind added 20 yards of effective distance, making this play like a 186-yard hole. Your 6-iron was the correct answer — hit it pure to center-green, 12 feet below the hole. Made the birdie. The golden rule into headwinds: take more club than you think, aim for the center, and don't let ego get in the way.`
          },
          {
            label: '7-iron straight at the flag',
            detail: 'Your 7-iron goes 170 yards. The flag is 166. Feels like plenty of club.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The headwind destroyed your 7-iron. It came up 18 yards short and plugged in the front bunker. Blast out to 20 feet, missed the par putt — bogey. Into a 15mph headwind, a 170-yard club plays to about 148 yards. Into headwinds, add a club for every 5mph of wind over 10. Today called for at least two clubs up.`
          },
          {
            label: '9-iron punch shot, keep it under the wind',
            detail: 'Hit a low punch with 9-iron to keep it under the wind and let it release onto the front of the green.',
            outcome: 'par',
            score: 0,
            caddieText: `Clever thinking, decent execution. The punch 9-iron stayed low and released onto the front of the green — 40 feet away. Two solid putts for par. Creative, but on a green that slopes aggressively away from you, starting from 40 feet makes par likely and birdie unlikely. The 6-iron to center-green was the higher-percentage play.`
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
            caddieText: `The math on going for this green never worked. Uphill into a headwind, your 5-wood was never reaching 238 yards. You made the smart call: 9-iron to 150, wedge from 88 yards to 6 feet, birdie putt. Knowing when you can't reach a green in two is as important as knowing when you can. This was a three-shot par 5 today.`
          },
          {
            label: '5-wood at the green',
            detail: 'Try to reach in two. Uphill into headwind, your 5-wood plays to about 195 yards — well short of the green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The math was never there. Uphill plus 12mph headwind turned your 5-wood into a 195-yard club. Came up 43 yards short, rolled into the left bunker. Blast out, two putts — bogey. On par 5s, "going for it" only makes sense when you can genuinely reach the green. Today you couldn't. Recognize those situations before you pull the club.`
          },
          {
            label: '7-iron to exactly 68 yards',
            detail: 'Hit 7-iron for 170 yards, leaving exactly 68 yards — your wedge zone. Clean and precise.',
            outcome: 'par',
            score: 0,
            caddieText: `Good thinking — same concept as the 9-iron layup, just with a 7-iron to a slightly tighter number. You hit 7-iron to 170, leaving 68 yards. But the wedge was pushed slightly and left 20 feet for birdie, which you couldn't convert. Par. The process was right. The birdie from 68 yards was still the best play on this hole — you just didn't make it.`
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
            caddieText: `That's how the locals play this hole. You understood the key: on Pebble's 7th, the wind is your caddie. A full swing into 20mph would balloon and sail right. The half-punch 9-iron started left of center, held its line, and the breeze brought it back to 8 feet. Made the putt. Club down, swing down, trust the wind to finish the job.`
          },
          {
            label: 'Pitching wedge, full swing at the flag',
            detail: 'Full pitching wedge (125 yards) straight at the pin. The wind should bring it back into the green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Full swings into crosswinds balloon badly. Your pitching wedge got up in the 20mph wind and pushed hard right — off the green, onto the cliff-side collection area. Nervy chip to 12 feet, missed the par putt — bogey. At Pebble's 7th, the instinct to swing harder is exactly wrong. The hole is 106 yards and plays like 106 yards. Control ball flight, not distance.`
          },
          {
            label: '9-iron straight at the pin, full swing',
            detail: 'Full 9-iron (150 yards) aimed directly at the flag. Plenty of club — give yourself a landing buffer.',
            outcome: 'double',
            score: 2,
            caddieText: `A full 9-iron from 106 yards into a 20mph crosswind at a green with no margin — that's a recipe for disaster, and it delivered. The ball ballooned, drifted hard right, and went over the cliff. Drop zone, two more to get down — double bogey. Pebble's 7th demands one thing: humility. Club down, shorter swing, keep the ball under the wind. Pride has destroyed scores here for 100 years.`
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
            caddieText: `The right instinct, good execution — but the putt from 30 feet left of a right-side pin on a fast green was trickier than expected. Two putts for par. You eliminated the big number and gave yourself a realistic putt. The one thing you could have done more aggressively: the bunker right is recoverable. The ocean isn't. Left-center was the right neighborhood.`
          },
          {
            label: '9-iron straight at the flag',
            detail: `Attack the right-side pin directly. 143 yards, 9-iron distance — flush it and you're looking at a tap-in birdie.`,
            outcome: 'bogey',
            score: 1,
            caddieText: `Going straight at a right-side pin here means any miss right — even a slight one — is over the bunker and potentially off the cliff. You caught the bunker. Tough explosion, couldn't save par — bogey. When the pin is tight to a hazard with no recovery (the Pacific Ocean), the miss away from danger is never wrong. Attack the flag only when the miss is survivable.`
          },
          {
            label: '7-iron into the center of the green',
            detail: 'Take extra club, keep it below the hole, land it center-green and let the slope release it toward the flag.',
            outcome: 'birdie',
            score: -1,
            caddieText: `Smart play with a great reward. The 7-iron landed center-green and released toward the flag — 12 feet. Made the putt. You used the green's slope as a weapon. Sometimes the conservative play IS the most attacking play in disguise: knowing a green's slope and using extra club to land-and-release can be more accurate than trying to fly it directly at a tight flag.`
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
            caddieText: `The left side of this fairway is the only safe side — the right tilts toward the cove. You hit driver to the left half, the tailwind added carry, left 184 yards for a 7-iron. Hit a pure 7-iron to 11 feet. Made the birdie. On ocean-adjacent holes, protect the safe side even if it costs you angle. Position beats distance on holes where one side is dead.`
          },
          {
            label: 'Driver at the center of the fairway',
            detail: 'Hit it straight and let the tailwind carry it. Could leave only 165 yards — a half-9-iron.',
            outcome: 'bogey',
            score: 1,
            caddieText: `The tailwind and the tilting fairway combined against you. A straight, well-struck ball still bounced right toward the cove and found the rough along the water. Restricted lie, punched out, wedge to 25 feet, two putts — bogey. When terrain tilts toward danger, aim away from it, not at center. Let the slope tell you where to stand.`
          },
          {
            label: '3-wood down the center',
            detail: 'Play safe, 230 yards, leaves 234 yards. A hybrid or long iron second shot, well away from the ocean.',
            outcome: 'par',
            score: 0,
            caddieText: `Solid, safe par — hybrid second to the front edge, two putts. Nothing wrong with it. But the tailwind made this hole play shorter than 464. A good drive down the left side would have left a 7-iron into a long par 4. You traded a birdie opportunity for bogey-avoidance that wasn't really necessary on a tailwind day.`
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
            outcome: 'birdie',
            score: -1,
            caddieText: `Perfect club selection. You converted a wind puzzle into a straightforward answer: 6-iron, center of the green, trust it. Landed center-green and released to 10 feet. Made the putt. On cliff-side holes at Pebble, always take more club and always miss away from the edge. You did both.`
          },
          {
            label: '7-iron at the flag',
            detail: `Your 7-iron goes 170 yards — close enough to the hole's yardage. Take it straight at the pin.`,
            outcome: 'bogey',
            score: 1,
            caddieText: `The 12mph headwind turned your 7-iron into a 150-yard club. Ball came up 20 yards short on the cliff's face — awkward spot. Chip to 18 feet, missed the par putt — bogey. This is the most common mistake at Pebble: using book yardage, not wind-adjusted yardage. At 12mph into your face, always take at least one full club extra. At 15mph+, take two.`
          },
          {
            label: '7-iron at maximum effort',
            detail: 'Swing harder than normal to fight through the wind and squeeze 185 yards out of your 7-iron.',
            outcome: 'double',
            score: 2,
            caddieText: `Swinging harder into a headwind is a double penalty: the hard swing creates more spin, which makes the ball balloon even more. Your "max effort" 7-iron went 152 yards — less than a normal swing. Ball dropped off the front-right edge toward the cliff. From a horrid lie, you made double. The answer into wind is always more club, same swing. Never swing harder.`
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
            detail: 'Aim left of the branch, punch 9-iron low to the fairway. Lands at 94 yards — close to wedge range, solid scramble opportunity.',
            outcome: 'par',
            score: 0,
            caddieText: `That's the right play from trouble. You accepted the situation, punched out to 94 yards, hit a solid wedge to 4 feet, and made the par putt. The discipline to take your medicine when you're in trouble is what separates good scorers from great ones. You turned a potential double into a par through smart decision-making.`
          },
          {
            label: 'Power through the rough at the flag',
            detail: 'Aim just left of the branch and muscle a hard 7-iron through the rough at the green.',
            outcome: 'double',
            score: 2,
            caddieText: `Deep rough kills iron shots, and the branch caught your follow-through. The ball squirted right, barely cleared the rough, and found the bunker at the green. Out of the bunker, two putts — double bogey. From deep rough with an obstruction, the odds are never in your favor going for the green. Take your medicine, save your par, move on.`
          },
          {
            label: 'Wedge punch to 120 yards',
            detail: 'Short punch shot to get back in play, leaving a full pitching wedge approach instead of your wedge yardage.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Got back in play, which was good. But 120 yards left you at an awkward distance — not your best yardage. Wedge to 25 feet, missed the par putt — bogey. When taking your medicine, be precise about where you're laying up. Punching to 94 yards would have set up a genuine par save. 120 yards wasn't your best number.`
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
            caddieText: `Great read of the situation. On a calm day with a back pin, taking extra club and attacking makes sense — and you executed it. 4-iron started at the flag, dropped two feet short and released to tap-in range. Birdie. Calm conditions at long par 3s are gifts. You took advantage of the one time you can actually attack a pin that's normally too exposed to go at.`
          },
          {
            label: '5-iron to the center of the green',
            detail: 'On a calm day, pure distance: 5-iron carries about 200 yards. Aim center, make par, move on.',
            outcome: 'par',
            score: 0,
            caddieText: `Good, solid par — 5-iron to center-green, 22 feet, two putts. Nothing wrong with that. On a calm day though, the back pin was actually attackable. Taking 4-iron and going at it converts this from a "make par" hole to a genuine birdie opportunity. Know when the conditions have turned a normally defensive hole into an offensive one.`
          },
          {
            label: '6-iron with extra effort',
            detail: 'Swing hard with 6-iron to squeeze out 202 yards. The beach is only in play short.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Swinging harder doesn't add reliable distance — it adds inconsistency. Your hard 6-iron flared right into the rough, awkward spot, chip to 15 feet, missed the par putt — bogey. On calm days, hit a comfortable 5-iron or 4-iron at real distance rather than manufacturing distance from the wrong club. Let the club do the work.`
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
            caddieText: `The best of both worlds. The knock-down 8-iron took spin off the ball, landed center-green, and trickled toward the flag — 9 feet. Made the birdie. Knock-down shots into small greens are underused: they're easier to control, land softer than expected, and release toward lower elevations. Here, that meant releasing toward the front-left flag without bunker risk. The conservative play was actually the most attacking play.`
          },
          {
            label: '9-iron to the right half of the green',
            detail: 'Miss right, miss safe — 9-iron at the right half takes the bunker completely out of play.',
            outcome: 'par',
            score: 0,
            caddieText: `Smart play. You eliminated the pot bunker and gave yourself a realistic putt from 22 feet right of the flag. Couldn't convert but tapped in for par. The front-left bunker on a short approach is a classic sucker flag — the birdie upside doesn't justify the risk of a near-unplayable lie. Par is the professional's score when the flag is in a punishing position.`
          },
          {
            label: '9-iron straight at the flag',
            detail: `Attack the front-left pin directly. 139 yards, 9-iron — if you flush it, it's birdie range.`,
            outcome: 'bogey',
            score: 1,
            caddieText: `You went for the sucker flag and got what most do: a pot bunker. The ball pitched a yard left of the hole, caught the bunker lip, settled in deep sand. Difficult blast out to 12 feet, missed the par putt — bogey. Pot bunkers at Pebble are not normal bunkers — they often require a sideways or backward escape. Recognize the "sucker pin" and aim away from it.`
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
            caddieText: `You laid up to exactly 73 yards on the second shot — perfectly calibrated to your wedge. Money wedge from 73 yards to 6 feet, birdie putt drops. On a three-shot par 5, the second shot decision is everything: not "how far can I hit it" but "what yardage do I want for shot three?" You answered that question correctly. 70 yards is the answer on every par 5 you can't reach.`
          },
          {
            label: '3-wood as far as possible',
            detail: 'Hit 3-wood for max distance, leaving ~55 yards. Gets you close to birdie range on the third.',
            outcome: 'par',
            score: 0,
            caddieText: `You hit 3-wood 240 yards but the crosswind pushed it right into the first cut of rough. From 53 yards in the rough, your wedge couldn't spin it close — 18 feet for birdie, missed it, par. Interestingly, the max-distance shot left you in worse position than a calibrated layup would have. The goal is not "as close as possible" — it's "your best yardage in the fairway."`
          },
          {
            label: 'Two-stage layup: iron, then wedge',
            detail: 'Conservative iron to 180 yards out, then a precise wedge to your 70-yard zone. Three precision shots.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Overly conservative. You laid up twice, using your wedge on the third shot to get to the 70-yard spot — meaning your wedge was now your fourth shot. Chipped to 10 feet, missed the putt — bogey. On par 5s, your second shot should be the layup to your best yardage. One well-chosen club to 70 yards is all you need. Strategy-stacking costs shots.`
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
            caddieText: `Reading the firm conditions was the key. Rather than trying to fly it to the hole, you landed it short and let the slope release the ball to 7 feet. Made the birdie. On firm, fast greens, the best players play below the hole and let the green do the work. "Releasing" toward the pin is often more reliable than flying it there — especially when backspin is unpredictable on hard surfaces.`
          },
          {
            label: 'Pitching wedge directly at the flag',
            detail: 'Take pitching wedge (115 yards), flight it high, try to stop it near the flag from 127 yards.',
            outcome: 'par',
            score: 0,
            caddieText: `The pitching wedge landed just past the flag and checked up to 14 feet. Good shot, but from 127 yards, under-clubbing by 12 yards cost you a birdie look. Par putt was makeable but the line was tough — missed it. At 127 yards you have enough club to attack with your 9-iron. Using pitching wedge from that distance is playing defense when you should be playing offense.`
          },
          {
            label: 'Sand wedge at full effort',
            detail: 'Swing your sand wedge hard to reach 127 yards. Try to stop it dead on a firm green.',
            outcome: 'bogey',
            score: 1,
            caddieText: `Swinging a sand wedge hard to reach 127 yards on a firm green is the worst combination: maximum spin meets hard surface. The ball hit, checked violently, then spun off the right edge into the bunker. Blast out to 20 feet, missed the putt — bogey. Never manufacture distance from the wrong club. The right club for 127 yards is 9-iron — controlled, accurate, at the right swing speed.`
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
            caddieText: `Playing the proper line on a dogleg is almost always correct — especially when the wind is working against cutting the corner. You hit driver to the left-center, left 122 yards, hit a crisp pitching wedge to 9 feet. Made the putt. Doglegs exist to reward players who play the angles, not the shortcuts. The inside line always asks you to carry more than you think.`
          },
          {
            label: 'Driver to cut the corner over the trees',
            detail: 'Aim at the trees and carry 255 yards over them. Right-to-left wind is working against your natural fade.',
            outcome: 'double',
            score: 2,
            caddieText: `You needed 255 yards to clear those trees. The right-to-left wind slowed your natural fade and you came up 8 yards short — ball deflected hard into the rough. From a tangled lie under the branches, you hacked out sideways, wedge to 30 feet, two putts — double. Tree-line gambits at Pebble are almost never worth it. The penalty for failure is too severe; the reward (wedge instead of pitching wedge) is too small.`
          },
          {
            label: '3-wood to the wide part of the fairway',
            detail: '3-wood safe to the wide left section, leaving 160 yards for a 7-iron approach.',
            outcome: 'par',
            score: 0,
            caddieText: `Solid par — 3-wood to the wide fairway, 7-iron to 20 feet, two putts. Conservative and reliable. The only thing keeping this from being the right answer: driver up the left side is equally safe and leaves a shorter, more attackable approach. When playing it safe off the tee, make sure you're actually gaining something from that decision.`
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
            caddieText: `Aggressive and smart at the same time. Into an 18mph headwind, your 3-wood played to just over 200 yards — landed center-right and released toward the flag to 8 feet. Made the birdie. Sometimes the right play IS the aggressive one, but only when the aggressive play also eliminates danger. A center-right 3-wood removed the ocean while giving you a genuine birdie look. Perfect.`
          },
          {
            label: '4-iron to the center of the green',
            detail: 'Forget the flag. 4-iron into the headwind plays to about 190 yards. Aim center-right, make par, protect your score.',
            outcome: 'par',
            score: 0,
            caddieText: `Exactly right — you played this hole the way it should be played. Aimed away from the ocean, took enough club, safely found the center-right. 20-foot putt, two putts for par. Par on the 17th at Pebble in an 18mph headwind is a round-saving score. The players who make double are the ones who go at the left flag. You didn't. Smart.`
          },
          {
            label: '3-iron directly at the left-center flag',
            detail: `Take 3-iron and attack the flag. The ocean is left, but you're going for birdie.`,
            outcome: 'double',
            score: 2,
            caddieText: `The ocean took your ball. Into an 18mph headwind, a straight 3-iron at a left-center flag gave zero margin for error. The ball started well but the headwind magnified a slight draw and it landed in the Pacific. Drop zone, pitch on, two putts — double bogey. On the 17th at Pebble, the ocean is the hole's defense. Attacking a left flag in a headwind is walking right into that defense.`
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
            caddieText: `You finished Pebble the right way. Laid up to the right side — ocean completely out of play — hit your money wedge from 70 yards to 6 feet, and made the birdie. Pebble's 18th is the most tempting hole in the world for heroics. But the best finishing strategy is the same as every strategy: protect the right side, set up your wedge, make the putt. Tom Watson won here with a smart layup birdie. So did you.`
          },
          {
            label: '3-wood at the green from 265 yards',
            detail: 'Go for the green in two. The ocean is left, but flush a 3-wood right and you could make eagle.',
            outcome: 'double',
            score: 2,
            caddieText: `265 yards with the ocean guarding the entire left side — this is one of the most dangerous shots in golf. Your 3-wood started fine but the left-to-right wind helped the ball more than expected and it released toward the water. Ball found the Pacific. Drop zone, onto the green in 4, two putts — double. Pebble's 18th has swallowed eagle attempts for generations. The ocean always wins unless you play the right side.`
          },
          {
            label: 'Conservative layup to 120 yards',
            detail: '120-yard layup — well short of wedge distance but far from the ocean.',
            outcome: 'par',
            score: 0,
            caddieText: `Good process, but slightly over-conservative. From 120 yards you hit a nice wedge to 18 feet but couldn't convert the birdie putt. Par. The issue: 120 yards isn't your best yardage — 70 yards is. On a finishing hole where birdie matters, set up the shot you actually own. Know your best number and play to it, every time.`
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
    description: 'Amen Corner, Rae\'s Creek, and the most storied Par 3 course in history.',
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
