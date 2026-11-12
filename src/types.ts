export interface StreetRacerProfile {
  id: string;
  name: string;
  arabicName: string;
  age: number;
  role: string;
  isCoreTrio: boolean; // Flag to identify the main founding trio vs other members
  tier: 'Founding Trio' | 'Team Member';
  car: string;
  bodyStyle: string; // Stock body aesthetic for police evasion
  personalMotive: string;
  drivingYears: number;
  racingSinceAge: number;
  specialty: string;
  biography: string;
  specs: {
    engine: string;
    output: string;
    transmission: string;
    drivetrain: string;
    keyModifications: string;
    exteriorLook: string;
  };
  signatureTechnique: {
    name: string;
    description: string;
  };
  activeStatus?: 'ACTIVE' | 'UPCOMING_HIATUS' | 'FRONTLINE_ROTATION';
  statusNote?: string;
  likes: string[];
  dislikes: string[];
  storyline?: DriverStoryline;
}

export interface DriverStoryline {
  title: string;
  arabicTitle: string;
  subtitle: string;
  howTechniqueAchieved: string;
  techniqueGenesis: {
    name: string;
    arabicName: string;
    coreMechanism: string;
    psychologicalAdvantage: string;
  };
  chronicleActs: {
    actNumber: string;
    title: string;
    narrative: string;
    tacticalInsight: string;
  }[];
  quote: {
    speaker: string;
    text: string;
  };
}

export interface RiyadhCourse {
  id: string;
  name: string;
  arabicName: string;
  zone: string;
  lengthKm: number;
  type: 'Highway Sprint' | 'Mountain Switchback' | 'Canyon Sweeper' | 'Urban Ring';
  description: string;
  dangerLevel: 'High' | 'Extreme' | 'Fatal Margin';
  recordTime: string;
  recordHolder: string;
  sectors: {
    name: string;
    targetSpeed: number;
    recommendedGear: number;
    tacticalTip: string;
  }[];
}

export interface BackstoryChapter {
  id: string;
  actNumber: string;
  title: string;
  arabicTitle: string;
  timeline: string;
  location: string;
  characters: string[];
  narrative: string[];
  keyMoment: string;
  trioQuote: {
    speaker: string;
    text: string;
  };
}

export interface WeatherAlert {
  condition: string;
  forecast: string;
  severity: 'CRITICAL' | 'SEVERE' | 'EXTREME';
  rainfallForecast: string;
  roadSurfaceHazard: string;
  tacticalImplication: string;
}

export interface MatchResult {
  winner: string;
  resultType: 'VICTORY' | 'WALKOVER_RECRUITMENT' | 'UNDECIDED';
  runDistanceKm?: number;
  runTime?: string;
  topSpeedRainKmh?: number;
  debrief: string;
  aftermath: string;
}

export interface ScheduledMatchup {
  memberId: string;
  memberName: string;
  memberCar: string;
  opponentRole: string;
  opponentCar: string;
  battleContext: string;
  tacticalChallenge: string;
  stakesLevel: 'High Tension' | 'Emotional Duel' | 'Survival Threshold' | 'Frontline Defense';
  weatherImpact?: string;
  result?: MatchResult;
}

export interface ExpeditionSchedule {
  id: string;
  date: string;
  rawDate: string;
  location: string;
  arabicLocation: string;
  title: string;
  summary: string;
  status: 'COMPLETED' | 'UPCOMING' | 'TBA';
  score?: string;
  transitionNote?: string;
  weatherAlert?: WeatherAlert;
  matchups: ScheduledMatchup[];
}
