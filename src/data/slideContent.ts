import { supabase } from "@/integrations/supabase/client";

export const tags = [
  "Socializing",
  "Cooking", 
  "Technology",
  "Feeling at Home",
  "Wellness",
  "Bed & Bath",
  "Exploration",
];

interface SlideVideo {
  url: string;
  duration: number;
}

interface SlideContent {
  videos: SlideVideo[];
  text: string;
}

const getVideoUrl = (fileName: string): string => {
  try {
    const { data } = supabase.storage
      .from('videos-landing')
      .getPublicUrl(fileName);
    
    if (!data) {
      console.error('Error getting video URL: No data returned');
      return '';
    }
    
    return data.publicUrl;
  } catch (error) {
    console.error('Error getting video URL:', error);
    return '';
  }
};

export const slideContent: Record<string, SlideContent> = {
  "Socializing": {
    videos: [
      { url: getVideoUrl('Professional_Mode_16x9_the_fire_is_burning_and_the_ambi.mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_16x9_Generated_Video (1).mp4'), duration: 5 }
    ],
    text: "Relax, enjoy local food and hang around the lounge... music and good vibes on us"
  },
  "Cooking": {
    videos: [
      { url: getVideoUrl('Professional_Mode_16x9_the_woman_is_cooking.mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_16x9_the_woman_is_choosing_what_to_pi.mp4'), duration: 5 }
    ],
    text: "Cook your favorite meals in our fully equipped shared kitchen spaces"
  },
  "Technology": {
    videos: [
      { url: getVideoUrl('Professional_Mode_16x9_the_woman_is_approaching_with_th.mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_16x9_the_woman_scrolls_the_screen_and.mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_16x9_Generated_Video (2).mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_the_popup_is_floating_mid_air_an.mp4'), duration: 5 }
    ],
    text: "Stay connected with high-speed WiFi and smart home features throughout"
  },
  "Feeling at Home": {
    videos: [
      { url: getVideoUrl('Professional_Mode_16x9_the_woman_is_placing_the_pillows.mp4'), duration: 5 }
    ],
    text: "Experience the comfort of home with our thoughtfully designed living spaces"
  },
  "Wellness": {
    videos: [
      { url: getVideoUrl('Professional_Mode_16x9_Generated_Video (3).mp4'), duration: 5 }
    ],
    text: "Maintain your fitness routine in our 24/7 wellness center"
  },
  "Bed & Bath": {
    videos: [
      { url: getVideoUrl('Professional_Mode_16x9_panoramic_view_of_the_bedroom.mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_16x9_panoramic_view_of_the_bathroom.mp4'), duration: 5 }
    ],
    text: "Premium bedding and luxurious bath amenities for ultimate comfort"
  },
  "Exploration": {
    videos: [
      { url: getVideoUrl('Professional_Mode_a_guy_running_in_the_desert.mp4'), duration: 5 },
      { url: getVideoUrl('Professional_Mode_a_woman_is_joinign_a_forest.mp4'), duration: 5 }
    ],
    text: "Discover local attractions with our curated city guides"
  }
};