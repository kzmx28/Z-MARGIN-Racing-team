import { StreetRacerProfile, RiyadhCourse, BackstoryChapter, ExpeditionSchedule } from '../types';

export const HERO_IMAGE = '/assets/aistudio/image_cd24ec1c.png';
export const TEAM_RENDEZVOUS_IMAGE = '/assets/aistudio/image_cd24ec1c.png';
export const TUWAIQ_PASS_IMAGE = '/src/assets/images/tuwaiq_mountain_pass_1793624920779.jpg';

// Core Trio of Z-MARGIN (Riyadh, Saudi Arabia)
// Undefeated Brothers for 3 Years
export const TEAM_MEMBERS: StreetRacerProfile[] = [
  {
    id: 'khaled-al-qahtani',
    name: 'Khaled Al-Qahtani',
    arabicName: 'خالد القحطاني',
    age: 26,
    role: 'Founder & Leader of Z-Margin (Main Driver)',
    isCoreTrio: true,
    tier: 'Founding Trio',
    car: '2016 Chevrolet Caprice',
    bodyStyle: '100% Stock Factory Exterior (Anti-Police Sleeper Spec)',
    personalMotive: 'Chasing the happiness and freedom he was denied at home after running away from his abusive father at 16.',
    drivingYears: 10,
    racingSinceAge: 16,
    specialty: 'High-Speed Highway Rolling Battles, Interchanges, Tactical Intimidation',
    biography: 'Khaled was 16 years old when he walked away from an abusive household with nothing to his name except an obsession with the open road. For Khaled, racing was never about clout or prize money—it was his sanctuary and his search for true happiness. He chose a 2016 Chevrolet Caprice and kept the exterior completely stock: no badges, no aftermarket aero, and factory ride height so traffic police pass it without a second glance. Under the hood, however, sits a finely tuned 460 HP V8 paired with a bulletproof automatic transmission built for punishing highway pulls.',
    specs: {
      engine: '6.0L V8 Naturally Aspirated Calibrated for 460 HP',
      output: '~460 HP @ 6,200 RPM',
      transmission: 'Heavy-Duty Automatic Transmission with High-Torque Calibrated Shifts',
      drivetrain: 'RWD (Rear-Wheel Drive) with Performance Limited-Slip Differential',
      keyModifications: 'Custom intake plenum, high-flow exhaust manifolds, tuned fuel maps, upgraded transmission cooling',
      exteriorLook: 'Completely Stock Body (No Badging, Factory Wheels, Police Evasion Sleeper)'
    },
    signatureTechnique: {
      name: 'The Midnight Slingshot (قنبلة الرياض)',
      description: 'Khaled sits behind opponents at 200+ km/h, baiting them into over-revving. The instant the lane opens, he steps into the 460 HP V8 torque, slingshotting past with the relaxed ease of an automatic transmission.'
    },
    likes: ['BBQ chicken', 'Caprice', 'His beard', 'His thobe'],
    dislikes: ['Show-offs', 'Big obnoxious spoilers', 'Hot girls'],
    storyline: {
      title: 'Escape to Asphalt: The Birth of the 460 HP Sleeper',
      arabicTitle: 'الهروب إلى الأسفلت: ولادة وحش الدائري',
      subtitle: 'From an Abusive Childhood Home to Undefeated Freedom on the Northern Ring',
      howTechniqueAchieved: 'Running away from an abusive father at sixteen, Khaled had zero money and zero family support—only an empty road at 3:00 AM. In the solitude of the highway, he discovered that speed gave him the peace, control, and happiness he was denied his entire youth. He blueprinted the Caprice’s 6.0L V8 to 460 HP while keeping the factory exterior untouched so police patrols would pass without suspicion.',
      techniqueGenesis: {
        name: 'The Midnight Slingshot',
        arabicName: 'قنبلة الرياض المتأخرة',
        coreMechanism: 'Using the relaxed, high-torque kickdown of the heavy-duty automatic gearbox, Khaled drafts opponents inches from their rear bumper, forcing them to overheat their engines in high RPMs before slingshotting past when the straightaway opens.',
        psychologicalAdvantage: 'Opponents looking in the rear-view mirror only see an ordinary commuter Chevrolet sedan before being overwhelmed by 460 HP naturally aspirated V8 torque.'
      },
      chronicleActs: [
        {
          actNumber: 'ACT 01',
          title: 'The Midnight Sanctuary',
          narrative: 'When Khaled walked out of his home at 16, he vowed never to live in fear again. The empty asphalt of Riyadh became his sanctuary. Every horsepower gained in the Caprice was a step away from his past pain.',
          tacticalInsight: 'Emotional detachment and zero fear of high speed allow full-throttle commitment where others hesitate.'
        },
        {
          actNumber: 'ACT 02',
          title: 'The Art of the Police Sleeper',
          narrative: 'Khaled refused loud spoilers, loud wraps, and aftermarket badges. His Caprice looks identical to a standard family sedan, allowing him to rule the highway ring without drawing unwanted eyes.',
          tacticalInsight: 'A sleeper exterior avoids police interference, letting mechanical perfection speak on the open tarmac.'
        }
      ],
      quote: {
        speaker: 'Khaled Al-Qahtani',
        text: 'I ran from pain at 16. On the highway, nobody can hurt you if they can never catch you.'
      }
    }
  },
  {
    id: 'yusuf-al-mutairi',
    name: 'Yusuf Al-Mutairi',
    arabicName: 'يوسف المطيري',
    age: 23,
    role: 'Second Driver & FWD Handling Savant (Main Driver)',
    isCoreTrio: true,
    tier: 'Founding Trio',
    car: '2011 Toyota Camry',
    bodyStyle: 'Stock Daily-Driver Exterior',
    personalMotive: 'Cars have been his sole lifelong passion, driving the Camry given to him by his father with unmatched devotion.',
    drivingYears: 7,
    racingSinceAge: 16,
    specialty: 'Pendulum Weight Transfer, Left-Foot Braking, Making FWD Act as RWD',
    biography: 'While others bounced between different hobbies, Yusuf never had an interest in anything in this world except cars. When he came of age, his father gave him the family’s 2011 Toyota Camry—a car most dismissed as a simple commuter sedan. Yusuf cherished the gift and unlocked its hidden balance. Retaining its unassuming stock body, he converted the powertrain to a pure manual transmission, pushing 223 HP. Through aggressive left-foot braking and Scandinavian flick weight transfers, Yusuf makes his front-wheel drive Camry rotate and slide with the tail-out agility of a rear-drive chassis through Riyadh roundabouts and mountain bends.',
    specs: {
      engine: '2.5L 4-Cylinder Tuned to 223 HP',
      output: '223 HP @ 6,400 RPM',
      transmission: 'Manual Transmission (Precise Footwork & Clutch Modulation)',
      drivetrain: 'FWD with Custom Rear Stiffening Geometry',
      keyModifications: 'Manual transmission conversion, performance clutch, intake and header tuning, upgraded brake pads',
      exteriorLook: 'Stock Factory Body (Unassuming Family Sedan Disguise)'
    },
    signatureTechnique: {
      name: 'The Pendulum Snap (انعطاف البندول)',
      description: 'Yusuf feints away from the corner, abruptly lifts off the throttle to transfer weight onto the front tires, and taps the handbrake to snap the rear into a synchronized slide, clearing the apex with zero understeer.'
    },
    likes: ['Manual transmission', 'Broasted', 'Stickers', 'Cold Americano', 'Waiting long lines in Coffee Address'],
    dislikes: ['Pizza', 'Chamaks', 'Kia drivers', 'Dried fries'],
    storyline: {
      title: 'A Father’s Gift & The FWD Defiance',
      arabicTitle: 'هدية الوالد وتحدي الدفع الأمامي',
      subtitle: 'Turning a Commuter Sedan into a Scandinavian Flick Masterpiece',
      howTechniqueAchieved: 'Yusuf never cared about gadgets, clothes, or status; cars were his sole obsession since childhood. When his father handed him the keys to the 2011 Camry, Yusuf treated it like sacred trust. He converted the car to manual and spent thousands of nights studying Scandinavian rally drivers, mastering left-foot braking until he could make a front-wheel drive sedan slide like a rear-wheel drive machine.',
      techniqueGenesis: {
        name: 'The Pendulum Snap',
        arabicName: 'انعطاف البندول الإسكندنافي',
        coreMechanism: 'By feathering the foot brake with the left foot while keeping engine revs high, Yusuf shifts vehicle weight over the front axle and breaks rear traction, rotating the Camry on its center axis with zero understeer.',
        psychologicalAdvantage: 'Opponents behind Yusuf are shocked to see a stock family Camry entering hairpins sideways with its rear tires sliding in perfect synchrony.'
      },
      chronicleActs: [
        {
          actNumber: 'ACT 01',
          title: 'The Sole Lifelong Passion',
          narrative: 'When friends moved on to other hobbies, Yusuf stayed in the driveway, learning every bolt and bushing of the Camry his father gifted him. He knew that true driving mastery comes from connection to the machine, not deep pockets.',
          tacticalInsight: 'Mechanical intimacy with a chassis allows exploiting 100% of its grip threshold without electronic assists.'
        },
        {
          actNumber: 'ACT 02',
          title: 'Defying FWD Limitations',
          narrative: 'Riyadh street culture looked down on front-wheel drive sedans as boring daily commuters. Yusuf spent three years proving that with precise weight transfer and manual footwork, FWD could out-rotate high-end sports cars.',
          tacticalInsight: 'Dynamic load transfer can induce oversteer in FWD, turning low corner speeds into high-velocity exits.'
        }
      ],
      quote: {
        speaker: 'Yusuf Al-Mutairi',
        text: 'My father gave me this car. It may look like an ordinary sedan to the world, but with two hands, three pedals, and clean weight transfer, it has never let me down.'
      }
    }
  },
  {
    id: 'mohammad-al-quraishi',
    name: 'Mohammad Al-Quraishi',
    arabicName: 'محمد القريشي',
    age: 20,
    role: 'Third Driver & Corner Specialist (Main Driver · Hiatus After Nov 18)',
    isCoreTrio: true,
    tier: 'Founding Trio',
    activeStatus: 'UPCOMING_HIATUS',
    statusNote: 'Taking an indefinite hiatus after the Nov 18, 2026 race to focus on his studies. May God help him with his hardships, Ameen.',
    car: '2007 Honda Accord',
    bodyStyle: 'Stock Exterior Body',
    personalMotive: 'Chasing speed alongside the family Accord kept since 2015 following the tragic death of his mother.',
    drivingYears: 13,
    racingSinceAge: 13,
    specialty: 'Low-to-High Speed Corner Traps, Unmatched Car Control, Apex Baiting',
    biography: 'Mohammad has been behind the steering wheel since he was 7 years old and street racing since 13. In 2015, his life changed forever when his mother passed away. The family’s 2007 Honda Accord remained in their driveway—a living memory of her. It was in that car, amidst grief, that Mohammad channeled his emotions into speed, developing supernatural car control. Under the stock body sits an Inline-4 K24 engine pushing 233 HP with Drag Cartel 3.2 camshafts, an unlocked ECU, and Honda’s H5 automatic transmission. Mohammad attacks corners with entry speeds that seem impossible, setting untouchable records like his 1:13 in the Wadi Hanifah DQ Section.',
    specs: {
      engine: '2.4L Inline-4 K24 with Drag Cartel 3.2 Camshafts & Unlocked ECU',
      output: '233 HP @ 7,400 RPM',
      transmission: 'H5 Automatic Transmission (Factory 5-Speed Auto Tuned for Fast Kickdown)',
      drivetrain: 'FWD with Limited-Slip Front Differential',
      keyModifications: 'Drag Cartel 3.2 camshafts, unlocked performance ECU, upgraded valve springs, slotted rotors',
      exteriorLook: 'Stock Factory Body (Stealth Tribute Machine)'
    },
    signatureTechnique: {
      name: 'The Mirage Apex (كمين المنعطف)',
      description: 'Mohammad enters blind high-speed corners without touching the brakes until the absolute micro-second before the apex. Pursuing drivers think he is making a fatal error, copy his entry speed, and understeer into the gravel runoff while Mohammad pivots clean.'
    },
    likes: ['Every food imaginable', 'His car’s exhaust note', 'LOVES to drink tea and coffee', 'Staying away from the city life'],
    dislikes: ['Speed bumps', 'People bragging about horsepower', 'Hot weather', 'Irresponsible people'],
    storyline: {
      title: 'A Mother’s Memory & The 1:13 Benchmark',
      arabicTitle: 'ذكرى الوالدة والرقم القياسي 1:13',
      subtitle: 'Channeling Grief into Supernatural Car Control on Wadi Hanifah’s Edge',
      howTechniqueAchieved: 'Driving since age 7 and street racing since 13, Mohammad lost his mother in 2015. Her 2007 Accord became his sanctuary—a sacred space where he felt her protective presence. Chasing speed was his way of honoring her memory. He tuned the K24 engine with Drag Cartel 3.2 camshafts and an unlocked ECU to 233 HP, pairing it with the factory H5 automatic. On the treacherous curves of Wadi Hanifah and Tuwaiq, Mohammad developed a sensory awareness that allows him to brake meters later than any mortal driver, setting the legendary 1:13.000 DQ section record.',
      techniqueGenesis: {
        name: 'The Mirage Apex',
        arabicName: 'كمين المنعطف والفرملة المتأخرة',
        coreMechanism: 'Mohammad enters blind high-speed corners without touching the brake until the absolute micro-second before turn-in. Opponents copy his trajectory, panic, and slide off into runoff barriers while Mohammad clips the apex clean.',
        psychologicalAdvantage: 'Baiting aggressive drivers into fatal overspeed errors without ever touching their vehicles.'
      },
      chronicleActs: [
        {
          actNumber: 'ACT 01',
          title: 'The Driveway Heirloom (2015)',
          narrative: 'When Mohammad’s mother passed away in 2015, the house was silent. But inside the Accord, holding the steering wheel she once held, Mohammad felt grounded. He promised to become the finest driver on the road, pouring his soul into the chassis.',
          tacticalInsight: 'Racing from love and reverence rather than ego creates supernatural composure in life-or-death corners.'
        },
        {
          actNumber: 'ACT 02',
          title: 'The 1:13.000 Wadi Hanifah Record',
          narrative: 'On the narrow Diplomatic Quarter descent, Mohammad strung together a series of late-braking trail entries that stunned the Riyadh racing underground, recording a 1:13.000 benchmark that has stood undefeated.',
          tacticalInsight: 'Late trail-braking with an unlocked K24 cam profile yields explosive corner exit velocity.'
        }
      ],
      quote: {
        speaker: 'Mohammad Al-Quraishi',
        text: 'My mother always told me to be the best at whatever I love. Every time I brake at the edge of the cliff, I know I am not alone.'
      }
    }
  },
  {
    id: 'amr-al-balushi',
    name: 'Amr Al Balushi',
    arabicName: 'عمرو البلوشي',
    age: 22,
    role: 'New Team Member & Reaction Specialist (Al-Naseem Ace · Frontline Rotation Post-Nov 18)',
    isCoreTrio: false,
    tier: 'Team Member',
    activeStatus: 'FRONTLINE_ROTATION',
    statusNote: 'Stepping into Mohammad Al-Quraishi’s frontline slot after Nov 18 to showcase his reaction skills and defend Z-Margin’s undefeated title.',
    car: '2019 Hyundai Elantra',
    bodyStyle: '100% Stock Body (Factory Sleeper Spec)',
    personalMotive: 'Long-time friend of Yusuf Al-Mutairi, proving that lightning-fast human reaction times and millisecond reflexes outclass raw engine displacement.',
    drivingYears: 5,
    racingSinceAge: 17,
    specialty: 'Exceptional Reaction Time, Launch Reflexes, Tight Traffic Gap Exploitation',
    biography: 'Hailing from Riyadh’s eastern district of Al-Naseem, Amr Al Balushi is notorious across the area for having the quickest reflexes on the street. A long-time friend of Yusuf Al-Mutairi, Amr grew up alongside Yusuf discussing driving dynamics, weight shifts, and midnight runs. While others focus solely on horsepower, Amr specialized in human response latency: his reaction time to shifting brake lights, opening gaps, and launch timing is measured in fractions of a second. Driving an unassuming 2019 Hyundai Elantra pushing 202 HP and kept completely stock to evade police attention, Amr threads through dense multi-lane traffic at speeds where others hesitate.',
    specs: {
      engine: '2.0L 4-Cylinder Calibrated to 202 HP for Instantaneous Throttle Response',
      output: '202 HP @ 6,300 RPM',
      transmission: '6-Speed Intelligent CVT Transmission',
      drivetrain: 'FWD with Stiffened Anti-Roll Geometry',
      keyModifications: '202 HP calibration, high-response throttle controller, lightweight flywheel, upgraded brake fluid and high-friction pads',
      exteriorLook: '100% Stock Body (Zero body kits, factory family sedan appearance)'
    },
    signatureTechnique: {
      name: 'The Reflex Snap Gate (ردة فعل النسيم الخاطفة)',
      description: 'Amr anticipates gaps between cars milliseconds before they form. He commits with instant stepped-ratio throttle kickdown without lifting, slipping into microscopic lane openings before the rival can react.'
    },
    likes: ['Sour candy', 'Mint tea', 'Nintendo Switch', 'Watching rally races'],
    dislikes: ['Bird poop on his car', 'Bumpy roads', 'Potholes', 'People driving under the speed limit in the high-speed lane'],
    storyline: {
      title: 'The Reflex Gate of Al-Naseem',
      arabicTitle: 'خاطف ثواني النسيم: ولادة ردة الفعل الاستثنائية',
      subtitle: 'Forging Sub-140ms Neurological Latency in Eastern Riyadh’s Densest Urban Grid',
      howTechniqueAchieved: 'Growing up in Al-Naseem, Amr never had wide open desert boulevards or empty canyon switchbacks. His proving ground was Eastern Riyadh’s most congested, high-density traffic grid—fraught with multi-lane highway merges, delivery trucks, erratic lane swerves, and unlit intersections. At age 17, after a near-miss with an unlit transport trailer that swung across two lanes without warning, Amr had an epiphany: on crowded midnight expressways, engine horsepower is useless if a driver takes 400 milliseconds to process danger. Amr dedicated himself to cognitive visual conditioning, training his peripheral vision to read micro-cues: the subtle suspension squat of a car two lanes ahead before an unsignaled swerve, the micro-flicker of incandescent brake filaments before full illumination, and headlights bouncing off concrete medians. Over five years of rigorous nocturnal training, Amr compressed his human reaction latency down to a verified 138 milliseconds—faster than an Olympic sprinter responding to the starter pistol.',
      techniqueGenesis: {
        name: 'The Reflex Snap Gate (CVT Stepped-Ratio Pre-Load)',
        arabicName: 'ردة فعل النسيم الخاطفة وتجهيز عزم السي في تي',
        coreMechanism: 'Traditional manual gearboxes and planetary automatics suffer a 200–400ms delay during clutch disengagement or downshift gear hunts when an unexpected gap opens. Amr turned the 2019 Elantra’s 6-Speed Intelligent CVT into a precision weapon: by lightly trail-braking with his left foot while keeping throttle tensioned, he pre-loads the CVT pulley cone geometry directly in the 202 HP sweet spot at 5,900 RPM. The millisecond his eyes detect an opening, he releases the left pedal: with zero shift lag and zero boost hesitation, the Elantra instantly shoots through the microscopic gate before the rival driver’s brain even recognizes an opening existed.',
        psychologicalAdvantage: 'Rivals trailing Amr witness his unassuming stock Elantra slice through closing traffic gaps with unnatural speed, triggering panic braking behind him while Amr disappears into clean highway air.'
      },
      chronicleActs: [
        {
          actNumber: 'ACT 01',
          title: 'The Bottlenecks of Eastern Riyadh',
          narrative: 'While other young racers gathered at remote desert strips to argue over dyno sheets, Amr spent midnight hours on Al-Naseem’s arterial corridors studying driver psychology and vehicle body language. He noticed that 99% of street racers hesitate for 300 to 500 milliseconds whenever a lane tightens. He realized that if he could master instant decision-making without lifting, no high-horsepower car could trap him in traffic.',
          tacticalInsight: 'Reaction latency is the ultimate street equalizer: a 202 HP car moving without hesitation beats a 500 HP car whose driver hesitates for half a second.'
        },
        {
          actNumber: 'ACT 02',
          title: 'The 138ms Neuro-Reflex Crucible',
          narrative: 'Amr’s close friendship with Yusuf Al-Mutairi pushed him to master car control. Yusuf ran high-speed shadow drills with Amr on the Eastern Ring, flashing brake lights unpredictably at 190 km/h. Within two years, Amr could predict lane changes from three cars ahead simply by reading headlight shadows against highway guardrails. His reaction time dropped to an astonishing 138 milliseconds—approaching fighter pilot thresholds.',
          tacticalInsight: 'Pre-cognitive spatial awareness: reading road shadows and front-tire angles allows commitment before the rival car actually begins its turn.'
        },
        {
          actNumber: 'ACT 03',
          title: 'Mastering the Stepped-Ratio CVT Snap',
          narrative: 'Purists dismissed the Elantra’s CVT transmission, but Amr saw its revolutionary advantage: continuous variable belt ratio with zero shift interruption. By pre-loading the steel belt pulleys at 5,900 RPM, Amr eliminated kickdown lag entirely. In underground pack runs, when a gap opens for a fraction of a second, Amr executes the Reflex Snap Gate and slips through cleanly, leaving opponents trapped behind traffic.',
          tacticalInsight: 'Continuous CVT torque transmission means zero torque dropout, allowing instantaneous gap exploitation while rivals wait for downshift gear engagement.'
        }
      ],
      quote: {
        speaker: 'Amr Al Balushi',
        text: 'On an empty dyno, horsepower wins arguments. But on a crowded midnight highway at 200 km/h, the road doesn’t care about your engine size—it only answers to who reacts first.'
      }
    }
  },
  {
    id: 'abdullah-al-omair',
    name: 'Abdullah Al Omair',
    arabicName: 'عبدالله العمير',
    age: 27,
    role: 'New Team Member & Pace Master (Record Veteran · Frontline Rotation Post-Nov 18)',
    isCoreTrio: false,
    tier: 'Team Member',
    activeStatus: 'FRONTLINE_ROTATION',
    statusNote: 'Stepping into Mohammad Al-Quraishi’s frontline slot after Nov 18 to showcase his relentless race pace and defend Z-Margin’s undefeated title.',
    car: '2012 Hyundai Sonata',
    bodyStyle: '100% Stock Body (Factory Sleeper Spec)',
    personalMotive: 'Veteran street racer racing since age 15 who pursues mathematical pace consistency, holding countless records across Riyadh.',
    drivingYears: 12,
    racingSinceAge: 15,
    specialty: 'Relentless Race Pace, Sector Consistency, Tire Heat Conservation',
    biography: 'Abdullah Al Omair is an enduring veteran of the Riyadh underground racing scene, having been behind the steering wheel since he was 15 years old. Over twelve years on the road, Abdullah has amassed countless sector records and benchmark times across Riyadh’s highway rings, bypass interchanges, and canyon corridors. Driving a 2012 Hyundai Sonata with 214 HP and a deceptively ordinary factory stock exterior, Abdullah commands an unshakeable, relentless race pace. His lap times stay within a tenth of a second run after run, wearing down opponents with sheer mechanical and mental endurance.',
    specs: {
      engine: '2.4L 4-Cylinder Calibrated to 214 HP for High-RPM Continuous Pace',
      output: '214 HP @ 6,200 RPM',
      transmission: '6-Speed Automatic Transmission',
      drivetrain: 'FWD with Reinforced Subframe Bushings for High-G Stability',
      keyModifications: '214 HP blueprint calibration, balanced rotating assembly, auxiliary oil cooler, slotted brake discs, precision alignment geometry for long-duration pace',
      exteriorLook: '100% Stock Body (Unassuming commuter sedan sleeper)'
    },
    signatureTechnique: {
      name: 'The Metronome Sector Pace (إيقاع المسرع المتواصل)',
      description: 'Abdullah locks into an unyielding, rhythmic pace, clipping identical apexes and hitting braking marks with metronomic consistency until his opponent overcooks their tires or misses a turn.'
    },
    likes: ['Espresso every morning', 'Loves Shabab Al-Bomb series', 'Empty parking lots', 'Fresh smell of burning rubber'],
    dislikes: ['Chrome rims', 'Sudden lane changers that don’t use their turn signal', 'Greasy food', 'Rush hour', 'Infotainment system of his car'],
    storyline: {
      title: 'The Metronome of the Southern Arterials',
      arabicTitle: 'إيقاع المسرع: اثنا عشر عاماً من الثبات المطلق',
      subtitle: 'How 12 Years on Riyadh’s Asphalt Forged Mathematical Pace & The Zero-Scrub Line',
      howTechniqueAchieved: 'Abdullah entered underground street racing at just 15 years old in 2014. In his early years, he drove like every hot-headed rookie: violent throttle spikes, smoking front brakes, and aggressive steering snaps. During a pivotal 35-kilometer endurance sprint on the Al-Kharj bypass, his sedan’s front tires disintegrated from extreme heat by kilometer 14, stranding him on the dark desert shoulder while high-horsepower rivals laughed into the distance. That humiliation sparked an epiphany: on Saudi Arabia’s searing asphalt, peak top speed is an illusion—pace consistency is absolute truth. For four straight years between 2:00 AM and 4:30 AM, Abdullah practiced solitary runs on the Al-Kharj highway with a stopwatch taped to his steering wheel and an infrared thermometer measuring tire heat after every run. Over 12 years and thousands of nocturnal runs, he developed an unshakeable internal biological clock, capable of running 20km highway loops with lap-time variance under 0.08 seconds.',
      techniqueGenesis: {
        name: 'The Metronome Sector Pace (Zero-Scrub Inertial Flow)',
        arabicName: 'إيقاع المسرع المتواصل وتدفق انعدام الاحتكاك الجانبي',
        coreMechanism: 'In a 214 HP front-wheel drive 2012 Sonata with a 6-speed automatic, harsh steering input scrubs the front tires, generating lethal heat and fatal understeer over long distances. Abdullah invented the Zero-Scrub Inertial Flow: he initiates his turn 40 meters earlier than conventional racers using subtle 2-to-3 degree steering angles combined with micro throttle-lifts to induce gentle rear-chassis yaw. His front tires never howl or slide; their operating temperature remains 15°C cooler than his rivals, preserving rubber adhesion through the entire race.',
        psychologicalAdvantage: 'Abdullah’s relentless, robotic pace wears down opponents mentally. High-horsepower cars pull ahead on straightaways only to see the unassuming stock Sonata effortlessly close the distance through every transition. Opponents overdrive, overheat their brakes, and make fatal errors under the pressure of his unwavering metronome rhythm.'
      },
      chronicleActs: [
        {
          actNumber: 'ACT 01',
          title: 'The Blistered Rubber Epiphany (Age 15)',
          narrative: 'Stranded on the desert highway at age 15 with destroyed front tires, Abdullah realized that adrenaline was a poison in endurance street racing. Fast drivers win sprints; pace masters control the entire night. He vowed never to overdrive a chassis again, treating every degree of tire slip as mechanical waste.',
          tacticalInsight: 'Thermal tire management is the foundation of street endurance: a tire running 15°C cooler retains 30% more lateral grip in late-race sectors.'
        },
        {
          actNumber: 'ACT 02',
          title: 'Solitary Midnight Calibration (The 0.08s Rhythm)',
          narrative: 'Night after night on the deserted Al-Kharj arterial, Abdullah trained his muscle memory to the point of machine precision. He memorized every highway seam, bridge expansion joint, and asphalt gradient between Riyadh and the southern provinces. His sector times became so repeatable that rivals called him "The Metronome" (المسرع).',
          tacticalInsight: 'Sector pacing over peak bursts: consistent 98% pace through traffic and transitions inevitably overtakes chaotic 105% bursts separated by hesitation.'
        },
        {
          actNumber: 'ACT 03',
          title: 'The Zero-Scrub Line & Brotherhood Alliance',
          narrative: 'Over 12 years, Abdullah established benchmark times across Riyadh that stood untouched. When the historic November 11, 2026 rainstorm halted his scheduled duel with Yusuf Al-Mutairi in Al-Kharj, Abdullah witnessed the pure ethos of Z-Margin—Mohammad’s rain victory and Khaled’s fearless battle. Recognizing brothers who respected the tarmac with the same sacred discipline, Abdullah joined Z-Margin to anchor the syndicate with unbreakable pace.',
          tacticalInsight: 'The Zero-Scrub Line allows a stock-bodied 214 HP automatic sedan to outlast and reel in exotic platforms as their tires degrade in extended street duels.'
        }
      ],
      quote: {
        speaker: 'Abdullah Al Omair',
        text: 'Anyone can step on the accelerator and feel fast for ten seconds. But when the race enters its twentieth kilometer and your tires are melting, the road will ask you: how honest is your rhythm?'
      }
    }
  }
];

// The Origin Chronicle: 3 Years of Undefeated Brotherhood
export const TRIO_BACKSTORY: BackstoryChapter[] = [
  {
    id: 'act-1',
    actNumber: '01',
    title: 'Two Souls on the Northern Ring',
    arabicTitle: 'لقاء على الدائري الشمالي والدرعية',
    timeline: 'Three Years Ago',
    location: 'Wadi Hanifa Interchange & Al-Falah',
    characters: ['Khaled Al-Qahtani', 'Yusuf Al-Mutairi'],
    narrative: [
      'Three years ago, Khaled Al-Qahtani was already a solitary legend on the Northern Ring Road. Running away from his abusive father at sixteen had left deep scars, but inside his stock-bodied 2016 Caprice, pushing 460 HP down the empty asphalt at 3:00 AM, Khaled found the peace and happiness he had been denied his entire childhood.',
      'One midnight near the sweeping bends of Diriyah, Khaled was testing his automatic transmission kickdown when an unassuming 2011 Toyota Camry caught his attention. It looked like an ordinary commuter sedan, but as it approached the infamous double-apex curve, the driver flicked the steering wheel, snapped the throttle off, and drifted through the bend with the tail out like a rear-wheel drive racer.',
      'Khaled followed the Camry to a quiet gas station in Al-Falah. The driver who stepped out was 20-year-old Yusuf Al-Mutairi. Yusuf lived for cars—it was the only thing in this world he cared about, and the Camry had been a gift from his father. Yusuf had converted it to manual and tuned it to 223 HP, mastering weight transfer to make FWD handle like RWD. That night, over black tea under the fluorescent lights, a deep mutual respect took root.'
    ],
    keyMoment: 'Khaled saw in Yusuf a brother who understood that cars were not about vanity, but about purpose and inner devotion.',
    trioQuote: {
      speaker: 'Khaled Al-Qahtani',
      text: 'I spent years running from pain at 240 km/h. When I saw Yusuf dance with that stock Camry through the apex, I realized I had finally found someone who loved the road as much as I did.'
    }
  },
  {
    id: 'act-2',
    actNumber: '02',
    title: 'The Ghost of Tuwaiq & A Mother’s Memory',
    arabicTitle: 'شبح عقبة طويق وذكرى الوالدة',
    timeline: 'Three Years Ago',
    location: 'Tuwaiq Escarpment Switchbacks',
    characters: ['Khaled Al-Qahtani', 'Yusuf Al-Mutairi', 'Mohammad Al-Quraishi'],
    narrative: [
      'Weeks after teaming up, Khaled and Yusuf kept hearing stories about a young driver in a completely stock 2007 Honda Accord who was embarrassing high-end sports cars on the treacherous switchbacks of Tuwaiq. Opponents who tried to match his corner speeds were spinning out and crashing into the barriers.',
      'Curious, Khaled and Yusuf parked their cars at the mountain summit to watch. Below them, an arrogant racer was tailing the stock Accord into the cliffside hairpin. The Accord entered at a terrifying speed without braking early. The challenger tried to copy the line, lost traction, and understeered into the gravel barrier. The Accord, meanwhile, flicked around the apex with supernatural precision.',
      'At the foot of the mountain, Khaled and Yusuf stopped the Accord. Stepping out was Mohammad Al-Quraishi—only 17 at the time. Mohammad shared his story: he had been driving since age 7 and street racing since 13. The Accord had been in his family since 2015, the year his mother passed away. Driving that car and chasing speed was his way of honoring her memory and confronting his grief. With Drag Cartel 3.2 cams and an unlocked ECU pushing 233 HP through its H5 automatic transmission, Mohammad possessed an intimate connection to the car that no casual racer could ever touch.'
    ],
    keyMoment: 'Mohammad told them: "My mother always told me to be the best at whatever I love. This Accord is my heartbeat."',
    trioQuote: {
      speaker: 'Mohammad Al-Quraishi',
      text: 'When my mother passed in 2015, the world felt quiet. But when I sit in this Accord and approach the apex, everything becomes clear. I don’t fear the corner because the car and I are one.'
    }
  },
  {
    id: 'act-3',
    actNumber: '03',
    title: 'The Pact of Zero Margin: An Untouchable Legacy',
    arabicTitle: 'ميثاق حافة الصفر: إرث لا يُمس',
    timeline: 'Three Years Undefeated',
    location: 'Al-Falah Private Workshop, Riyadh',
    characters: ['Khaled', 'Yusuf', 'Mohammad'],
    narrative: [
      'Inside Khaled’s private garage in Al-Falah, the three young men realized their meeting was destiny. Each drove an unassuming, stock-bodied sleeper car to stay invisible to the police. Each carried a deeply personal motivation that made them fearless.',
      'Khaled’s 460 HP Caprice commanded the high-speed highway rolls. Yusuf’s 223 HP manual Camry owned the technical canyon sweepers. Mohammad’s 233 HP Drag Cartel Accord mastered the perilous mountain passes. Together, they realized they left zero room for error—a zero margin between the concrete barrier and victory.',
      'They named themselves Z-MARGIN (حافة الصفر). Over the past three years of friendship, their bond has grown from racing partners into unbreakable brothers. Across those three years throughout the Riyadh region, the Z-Margin trio has faced around 142 racers in total—and has never suffered a single defeat. They race not for trophies, but to build an untouchable legacy on the streets of Riyadh.'
    ],
    keyMoment: 'Three years of friendship. ~142 racers faced across the Riyadh region. Zero defeats.',
    trioQuote: {
      speaker: 'Yusuf Al-Mutairi',
      text: 'Others race for pride or social media. We race for family, for freedom, and for those we lost. That is why no one can touch Z-Margin.'
    }
  }
];

// Expedition Schedules & Official Records
export const EXPEDITION_SCHEDULE: ExpeditionSchedule[] = [
  {
    id: 'expedition-al-kharj',
    date: 'November 11, 2026',
    rawDate: '2026-11-11',
    location: 'Al-Kharj Highway & Southern Pass',
    arabicLocation: 'طريق الخرج والقطاع الجنوبي',
    title: 'Al-Kharj Expedition: Southern Crossing',
    summary: 'OFFICIAL RECORD: COMPLETED (3 - 0 CLEAN SWEEP FOR Z-MARGIN). A legendary night on the Al-Kharj southern arterial. The races began in bone-dry conditions before a violent torrential cloudburst inundated the highway ring. Mohammad conquered the 25km run after the Optima spun out, Khaled clenched his teeth through past trauma to defeat his ex-friend in a violent 28km wet brawl, and Sonata driver Abdullah Al Omair pledged his allegiance to Z-Margin when weather halted the 3rd bout, cementing an untouchable 3-0 victory and recruiting a veteran pace master.',
    status: 'COMPLETED',
    score: '3 - 0 CLEAN SWEEP',
    weatherAlert: {
      condition: 'Torrential Desert Cloudburst & Severe Flooding (Completed Under Extreme Rain)',
      forecast: 'Midway through the opening duel, extreme torrential rain unleashed across the Al-Kharj ring road. Standing water in dips and zero visibility transformed the asphalt into an ultra-slick desert oil film.',
      severity: 'CRITICAL',
      rainfallForecast: 'Torrential Downpour Struck Midway · High Aquaplaning & Standing Water',
      roadSurfaceHazard: 'Desert dust and sudden heavy rainfall produced a mirror-slick surface friction drop (>70%), causing violent wheelspin and spin-out hazards at speeds exceeding 160 km/h.',
      tacticalImplication: 'Race outcome forged under extreme weather: Mohammad conquered the rain with a 178 km/h top speed; Khaled endured high-torque RWD power-down struggles to finish at 163 km/h; Yusuf and Abdullah chose brotherhood over a life-threatening downpour duel.'
    },
    matchups: [
      {
        memberId: 'mohammad-al-quraishi',
        memberName: 'Mohammad Al-Quraishi',
        memberCar: '2007 Accord (233 HP K24 Drag Cartel 3.2 · H5 Auto)',
        opponentRole: 'Top Al-Kharj Tactician',
        opponentCar: '2015 Kia Optima',
        battleContext: 'The driver of the 2015 Optima was celebrated as one of the finest, most calculating drivers in Al-Kharj. The battle launched in bone-dry conditions, but midway through the run, torrential rain suddenly dropped hard across the Al-Kharj ring road.',
        tacticalChallenge: 'Mohammad adapted his trail braking and K24 power delivery instantaneously as standing water accumulated on the asphalt.',
        stakesLevel: 'High Tension',
        weatherImpact: 'SUDDEN TORRENTIAL DOWNPOUR: Midway through the 25km sprint, heavy rain flooded the ring road, triggering extreme hydroplaning.',
        result: {
          winner: 'Mohammad Al-Quraishi (Z-MARGIN)',
          resultType: 'VICTORY',
          runDistanceKm: 25,
          runTime: '12:43.000',
          topSpeedRainKmh: 178,
          debrief: 'The race started under dry skies, but midway into the run, the forecasted torrential rain opened up violently over the Al-Kharj ring road. Mohammad demonstrated supernatural car control in his 2007 Accord, carving through standing water. As the rain dropped hard, the Optima driver lost control and suffered a sudden spin-out on the slick asphalt. Alhamdullilah, he was completely safe and no damage occurred to him or his beloved car.',
          aftermath: 'The Optima driver humbly accepted defeat and personally presented Mohammad with the official winner’s trophy. Mohammad logged an official time of 12:43.000 over the 25km run with a recorded top speed of 178 km/h in the pouring rain.'
        }
      },
      {
        memberId: 'khaled-al-qahtani',
        memberName: 'Khaled Al-Qahtani',
        memberCar: '2016 Caprice (~460 HP V8 · Automatic)',
        opponentRole: 'Ex-Close Friend & Former Street Partner',
        opponentCar: '2014 Ford Mustang GT',
        battleContext: 'A heart-wrenching grudge match against Khaled’s former best friend from his teenage years before running away from home. By the time they lined up, the rain was pounding the asphalt with unrelenting fury.',
        tacticalChallenge: 'Taming ~460 HP of naturally aspirated V8 torque through the automatic transmission on soaking wet desert tarmac with near-zero rear traction.',
        stakesLevel: 'Emotional Duel',
        weatherImpact: 'EXTREME WET TARMAC & LOOSE CANNON DYNAMICS: Both high-torque rear-drive cars were fighting for mechanical purchase on slick standing water.',
        result: {
          winner: 'Khaled Al-Qahtani (Z-MARGIN)',
          resultType: 'VICTORY',
          runDistanceKm: 28,
          runTime: '14:13.000',
          topSpeedRainKmh: 163,
          debrief: 'The road was super slippery; the 460 HP Caprice and Mustang GT were literal loose cannons. They traded paint bumper-to-bumper, hitting each other back to back through violent slides. Khaled had an immense struggle putting the V8 power down to the wet ground. As the downpour intensified, Khaled clenched his teeth, remembering the pain and abuse of the past he had run away from, and resolved to push through with zero fear.',
          aftermath: 'Khaled completed the brutal 28km run in 14 minutes and 13 seconds (14:13.000), clocking a top rain speed of 163 km/h. At the finish, the ex-friend refused to pull over or even congratulate Khaled—he held the throttle flat, drove straight along the dark highway, and disappeared into the night. Will they reconcile soon? I guess we will never know.'
        }
      },
      {
        memberId: 'yusuf-al-mutairi',
        memberName: 'Yusuf Al-Mutairi',
        memberCar: '2011 Camry (223 HP · Manual Transmission)',
        opponentRole: 'Consistent Win-Record Veteran (Now Z-Margin Team Member)',
        opponentCar: '2012 Hyundai Sonata',
        battleContext: 'Yusuf was scheduled to face the revered veteran of Al-Kharj, Abdullah Al Omair in his 2012 Sonata—a racer with an unbroken streak of consistent wins.',
        tacticalChallenge: 'Adapting to sudden race cancellation and welcoming a veteran opponent into the Z-Margin family.',
        stakesLevel: 'High Tension',
        weatherImpact: 'WEATHER CANCELLATION // HAZARDOUS DOWNPOUR: The torrential rainfall intensified to flash-flood thresholds, rendering safe competitive racing impossible.',
        result: {
          winner: 'Yusuf Al-Mutairi & Z-MARGIN (Recruitment Victory)',
          resultType: 'WALKOVER_RECRUITMENT',
          debrief: 'Yusuf was eager and ready to unleash his manual Camry on the slick asphalt, but the torrential weather worsened to dangerous, flooded conditions, deeming the competitive run impossible. Rather than letting the night fade into a draw, the Sonata driver—Abdullah Al Omair—recognized the sheer brotherhood and caliber of Z-Margin and decided to officially join the Z-Margin street racing team.',
          aftermath: 'The recruitment counted as the third official win for Z-Margin, cementing an undefeated 3-0 clean sweep in Al-Kharj and bringing Abdullah Al Omair’s veteran pace into the team.'
        }
      }
    ]
  },
  {
    id: 'expedition-western-riyadh',
    date: 'November 18, 2026',
    rawDate: '2026-11-18',
    location: 'Western Riyadh Ring & Qiddiya Ridge',
    arabicLocation: 'القطاع الغربي وعقبة القدية',
    title: 'Western Riyadh Showdown: The Survival Threshold',
    summary: 'The ultimate proving night for Z-Margin and Mohammad Al-Quraishi’s final battle before taking an indefinite hiatus to focus on his studies (May God help him with his hardships, Ameen). Mohammad faces one of the hardest and most dangerous challenges of his street racing life against a notoriously aggressive rammer, Khaled tests his top-end pull against a surprisingly lethal V6, and Yusuf battles his modern counterpart for Camry supremacy.',
    status: 'UPCOMING',
    transitionNote: 'SYNDICATE NOTICE: Following the November 18 showdown, Mohammad Al-Quraishi will step away on an indefinite hiatus to focus on his studies. May God help him with his hardships, Ameen. For the next races to be announced, new members Amr Al Balushi and Abdullah Al Omair will step into Mohammad’s frontline spot to defend Z-Margin’s undefeated title.',
    matchups: [
      {
        memberId: 'mohammad-al-quraishi',
        memberName: 'Mohammad Al-Quraishi',
        memberCar: '2007 Accord (233 HP K24 Drag Cartel 3.2 · H5 Auto)',
        opponentRole: 'Notorious Hit-and-Run Rammer',
        opponentCar: '2023 Hyundai Elantra',
        battleContext: 'Mohammad’s final frontline appearance before his indefinite academic hiatus. One of the hardest and most hazardous challenges in his racing life—the Elantra driver is notorious across Riyadh for dirty tactics, deliberately bumping quarter-panels in braking zones and speeding away at 180+ km/h.',
        tacticalChallenge: 'Mohammad cannot rely on standard gentleman racing lines. He must deploy his signature "Mirage Apex" to bait the rammer into overshooting before any physical contact can occur, closing this chapter undefeated before focusing on his studies.',
        stakesLevel: 'Survival Threshold'
      },
      {
        memberId: 'khaled-al-qahtani',
        memberName: 'Khaled Al-Qahtani',
        memberCar: '2016 Caprice (~460 HP V8 · Automatic)',
        opponentRole: 'High-Speed Sleeper Specialist',
        opponentCar: '2022 Hyundai Azera V6',
        battleContext: 'A modern, sophisticated highway weapon. Despite being an executive V6 sedan, this 2022 Azera boasts exceptional top-end acceleration and high aerodynamic efficiency that has caught dozens of high-output V8s off guard.',
        tacticalChallenge: 'Khaled must rely on the full 460 HP torque of his blueprinted V8 to pull clear before the Azera can draft in his slipstream.',
        stakesLevel: 'High Tension'
      },
      {
        memberId: 'yusuf-al-mutairi',
        memberName: 'Yusuf Al-Mutairi',
        memberCar: '2011 Camry (223 HP · Manual Transmission)',
        opponentRole: 'King of the Western Riyadh Region',
        opponentCar: '2024 Toyota Camry',
        battleContext: 'The clash of two generations and two philosophies. The driver of the 2024 Camry is celebrated as the "King of the Western Region". A direct Camry-vs-Camry civil war: Yusuf’s analog 2011 manual sleeper versus the latest 2024 platform.',
        tacticalChallenge: 'Yusuf must prove that pure driver feel, manual footwork, and weight transfer trump modern computerized driver assists and horsepower.',
        stakesLevel: 'High Tension'
      }
    ]
  },
  {
    id: 'expedition-post-nov18-tba',
    date: 'Post-Nov 18 · TBA',
    rawDate: '2026-12-01',
    location: 'Riyadh Underground Sectors (To Be Announced)',
    arabicLocation: 'قطاعات الرياض · يُعلن لاحقاً',
    title: 'Frontline Defense: The New Guard Steps Up',
    summary: 'With Mohammad Al-Quraishi on an indefinite hiatus after November 18 to focus on his studies (May God help him with his hardships, Ameen), new team members Amr Al Balushi and Abdullah Al Omair officially step into Mohammad’s frontline spot. Alongside founders Khaled Al-Qahtani and Yusuf Al-Mutairi, they will showcase their skills and capabilities on the frontlines to defend Z-Margin’s undefeated title in the upcoming races to be announced.',
    status: 'TBA',
    transitionNote: 'INDEFINITE HIATUS & FRONTLINE HANDOVER: Mohammad Al-Quraishi steps back for his studies after Nov 18 (May God help him with his hardships, Ameen). Amr Al Balushi (2019 Elantra) and Abdullah Al Omair (2012 Sonata) take over his frontline slot to prove their caliber and keep Z-Margin undefeated.',
    matchups: [
      {
        memberId: 'amr-al-balushi',
        memberName: 'Amr Al Balushi (Frontline Showcase)',
        memberCar: '2019 Elantra (202 HP · 6-Speed Intelligent CVT)',
        opponentRole: 'Upcoming Riyadh Challengers (TBA)',
        opponentCar: 'Stepping Into Mohammad’s Frontline Spot',
        battleContext: 'Stepping onto the frontline while Mohammad focuses on his studies. Amr brings Al-Naseem’s fastest sub-140ms reaction times and stepped-ratio CVT pre-load to dense highway battles and sudden traffic gaps.',
        tacticalChallenge: 'Defend Z-Margin’s undefeated streak by showcasing elite human reaction latency against high-horsepower challengers in upcoming announced battles.',
        stakesLevel: 'Frontline Defense'
      },
      {
        memberId: 'abdullah-al-omair',
        memberName: 'Abdullah Al Omair (Frontline Showcase)',
        memberCar: '2012 Sonata (214 HP · 6-Speed Automatic)',
        opponentRole: 'Upcoming Riyadh Challengers (TBA)',
        opponentCar: 'Stepping Into Mohammad’s Frontline Spot',
        battleContext: 'Taking over Mohammad’s frontline rotation alongside Amr. With 12 years on Riyadh’s streets since age 15, Abdullah brings mathematical sector consistency and his Zero-Scrub Line to long-distance duels.',
        tacticalChallenge: 'Outlast and dismantle challengers through relentless pace consistency and tire heat preservation to protect the syndicate’s zero-defeat record.',
        stakesLevel: 'Frontline Defense'
      },
      {
        memberId: 'khaled-al-qahtani',
        memberName: 'Khaled Al-Qahtani & Yusuf Al-Mutairi',
        memberCar: '2016 Caprice (460 HP Auto) & 2011 Camry (223 HP Manual)',
        opponentRole: 'Founding Anchors & Title Defenders',
        opponentCar: 'Holding the Core Line Until Mohammad Returns',
        battleContext: 'While Mohammad handles his academic responsibilities—May God ease his path, Ameen—Khaled and Yusuf anchor the team and guide Amr and Abdullah in their frontline proving runs.',
        tacticalChallenge: 'Keep the 3-year undefeated Z-Margin banner intact across all upcoming Riyadh expeditions until the founding trio reunites.',
        stakesLevel: 'Frontline Defense'
      }
    ]
  }
];

// Riyadh Racing Grounds & Circuits
export const RIYADH_COURSES: RiyadhCourse[] = [
  {
    id: 'wadi-hanifah-dq',
    name: 'Wadi Hanifah DQ Section (قطاع حي السفارات)',
    arabicName: 'قطاع حي السفارات بوادي حنيفة',
    zone: 'Diplomatic Quarter & Valley Corridor',
    lengthKm: 3.1,
    type: 'Canyon Sweeper',
    description: 'The celebrated downhill descent into the valley flanking the Diplomatic Quarter. Packed with tight, rhythmic S-bends and slippery stone curbs where Mohammad Al-Quraishi cemented his legendary 1:13.000 record time.',
    dangerLevel: 'Extreme',
    recordTime: '1:13.000',
    recordHolder: 'Mohammad Al-Quraishi (2007 Accord · K24 Drag Cartel 3.2)',
    sectors: [
      { name: 'DQ Ridge Descent', targetSpeed: 135, recommendedGear: 3, tacticalTip: 'Late-apex trail braking required entering the valley floor' },
      { name: 'The Palm Chicane', targetSpeed: 88, recommendedGear: 2, tacticalTip: 'Mohammad’s benchmark 1:13 pace line; razor-sharp curb clearance' },
      { name: 'Valley Gateway Sprint', targetSpeed: 170, recommendedGear: 4, tacticalTip: 'Full throttle sprint past the Diplomatic Quarter gate' }
    ]
  },
  {
    id: 'tuwaiq-escarpment',
    name: 'Tuwaiq Mountain Switchbacks (عقبة طويق)',
    arabicName: 'عقبة طويق الجبلية',
    zone: 'Western Riyadh Escarpment',
    lengthKm: 12.8,
    type: 'Mountain Switchback',
    description: 'The perilous cliffside pass descending the ancient Tuwaiq plateaus near Riyadh. 26 sweeping switchbacks flanked by vertical stone walls. The sacred proving ground where Mohammad Al-Quraishi honors his mother’s memory in his 233 HP Accord.',
    dangerLevel: 'Fatal Margin',
    recordTime: '5:41.120',
    recordHolder: 'Mohammad Al-Quraishi (2007 Accord)',
    sectors: [
      { name: 'Cliff Plateau Dive', targetSpeed: 175, recommendedGear: 4, tacticalTip: 'Crosswinds across the plateau edge; maintain center groove' },
      { name: 'The Seven Blind Hairpins', targetSpeed: 62, recommendedGear: 2, tacticalTip: 'Mohammad’s signature late-apex trail braking zone' },
      { name: 'Canyon Chute Sprint', targetSpeed: 190, recommendedGear: 4, tacticalTip: 'Full throttle descent toward the desert floor' }
    ]
  },
  {
    id: 'king-fahd-highway',
    name: 'King Fahd Midnight Strip (طريق الملك فهد)',
    arabicName: 'طريق الملك فهد الرئيسي',
    zone: 'Central Financial Corridor',
    lengthKm: 16.4,
    type: 'Highway Sprint',
    description: 'The illuminated urban artery of Riyadh. Under the glow of Kingdom Centre, Khaled Al-Qahtani’s stock-looking 460 HP Caprice automatic reigns supreme on midnight highway rolls.',
    dangerLevel: 'High',
    recordTime: '4:18.450',
    recordHolder: 'Khaled Al-Qahtani (2016 Caprice)',
    sectors: [
      { name: 'Financial District Flyover', targetSpeed: 235, recommendedGear: 4, tacticalTip: 'Highway expansion joints; smooth steering inputs' },
      { name: 'Underpass Corridor', targetSpeed: 270, recommendedGear: 5, tacticalTip: 'Acoustic resonance corridor with 460 HP automatic kickdown' },
      { name: 'Southern Junction Deceleration', targetSpeed: 160, recommendedGear: 3, tacticalTip: 'Braking zone into the industrial belt' }
    ]
  },
  {
    id: 'diriyah-canyons',
    name: 'Diriyah Heritage Canyon Sweepers (وادي الدرعية)',
    arabicName: 'طريق وادي حنيفة والدرعية',
    zone: 'Historical Northwest District',
    lengthKm: 8.9,
    type: 'Canyon Sweeper',
    description: 'Narrow, serpentine roads carved alongside ancient palm groves and historical stone walls. Yusuf Al-Mutairi’s 223 HP manual Camry executes its physics-bending pendulum slides here.',
    dangerLevel: 'Extreme',
    recordTime: '4:02.880',
    recordHolder: 'Yusuf Al-Mutairi (2011 Camry)',
    sectors: [
      { name: 'Historical Stone Chicane', targetSpeed: 95, recommendedGear: 3, tacticalTip: 'Millimeter precision between stone walls' },
      { name: 'Palm Grove Pendulum Curves', targetSpeed: 110, recommendedGear: 3, tacticalTip: 'Throttle-lift weight transfer initiates controlled rear rotation' },
      { name: 'Wadi Bridge Flat-Out', targetSpeed: 160, recommendedGear: 4, tacticalTip: 'Narrow two-lane bridge run' }
    ]
  },
  {
    id: 'northern-ring-road',
    name: 'Northern Ring Road Sprint (الدائري الشمالي)',
    arabicName: 'طريق الدائري الشمالي',
    zone: 'Northern Riyadh Ring',
    lengthKm: 21.0,
    type: 'Urban Ring',
    description: 'Wide, fast, eight-lane ring highway where Khaled spent ten years perfecting his sleeper strategy, maintaining an unbroken win streak.',
    dangerLevel: 'High',
    recordTime: '6:12.300',
    recordHolder: 'Khaled Al-Qahtani (2016 Caprice)',
    sectors: [
      { name: 'Nakheel Interchange', targetSpeed: 220, recommendedGear: 4, tacticalTip: 'High-speed sweeping entry' },
      { name: 'Airport Road Merging Zone', targetSpeed: 245, recommendedGear: 5, tacticalTip: 'Wide open highway sprint' },
      { name: 'Exit 6 Sweeper', targetSpeed: 180, recommendedGear: 4, tacticalTip: 'Banked curve testing tire adhesion' }
    ]
  },
  {
    id: 'al-naseem-arterial',
    name: 'Al-Naseem Urban Grid Sprint (شوارع النسيم)',
    arabicName: 'مضمار شوارع حي النسيم',
    zone: 'Eastern Riyadh District',
    lengthKm: 7.4,
    type: 'Highway Sprint',
    description: 'The dense, unforgiving urban grid of Eastern Riyadh where Amr Al Balushi established his reputation. Demands sub-second reaction times to thread through tight multi-lane traffic, accompanied by Abdullah Al Omair’s legendary sector pace records.',
    dangerLevel: 'Extreme',
    recordTime: '3:24.150',
    recordHolder: 'Amr Al Balushi (2019 Elantra) · Pace Benchmark: Abdullah Al Omair (2012 Sonata)',
    sectors: [
      { name: 'Al-Naseem Boulevard Launch', targetSpeed: 165, recommendedGear: 3, tacticalTip: 'Amr’s sub-second reaction launch; thread through traffic gap before light cycle' },
      { name: 'Four-Way Junction Switch', targetSpeed: 115, recommendedGear: 3, tacticalTip: 'Split-second evasion line; zero throttle hesitation' },
      { name: 'Eastern Ring Exit Sweeper', targetSpeed: 195, recommendedGear: 4, tacticalTip: 'Abdullah’s metronomic sector pace line; smooth tire slip angle' }
    ]
  }
];
