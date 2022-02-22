User.destroy_all
Shlf.destroy_all
Blog.destroy_all

users = [
    {
        id: 1,
        email: "hotyann@hotmale.com",
        password: "1234567890",
    },
    {
        id: 2,
        email: "hotdeon@hotmale.com",
        password: "1234567890",
    },
    {
        id: 3,
        email: "hotgina@hotmale.com",
        password: "1234567890",
    },
];

blogs = [
    {
        id: 1,
        name: "Melon pun",
        comment: "Don’t be melon-dramatic",
        user_id: 1,
        shlf_id: 1,
    },
    {
        id: 2,
        name: "Raisin pun",
        comment: "Being un-raisin-able",
        user_id: 1,
        shlf_id: 1,
    },
    {
        id: 3,
        name: "Plum pun",
        comment: "That’s plum-believable",
        user_id: 1,
        shlf_id: 1,
    },
    {
        id: 4,
        name: "Pear",
        comment: "You’re pear-fect",
        user_id: 2,
        shlf_id: 2,
    },
    {
        id: 5,
        name: "Lime",
        comment: "Sorry I’m bad at pickup limes",
        user_id: 2,
        shlf_id: 2,
    },
    {
        id: 6,
        name: "Mango",
        comment: "It takes two to mango",
        user_id: 2,
        shlf_id: 2,
    },
    {
        id: 7,
        name: "Apple",
        comment: "Thank you! I apple-solutely appreciate it",
        user_id: 3,
        shlf_id: 3,
    },
    {
        id: 8,
        name: "Kiwi",
        comment: "Kiwi be friends?",
        user_id: 3,
        shlf_id: 3,
    },
    {
        id: 9,
        name: "Pineapple",
        comment: "If you were a fruit, you’d be a fine-apple",
        user_id: 3,
        shlf_id: 3,
    }
];

shlves = [
  {
    id: 1,
    name: "apples",
    room_temp: "3 weeks",
    refrigerator_temp: "4 to 6 weeks",
    freezer_temp: "8 months",
    image:
      "https://cdn.pixabay.com/photo/2020/05/17/19/43/apple-5183288_1280.jpg",
  },
  {
    id: 2,
    name: "bananas",
    room_temp: "until ripe",
    refrigerator_temp: "3 days",
    freezer_temp: "2 to 3 months",
    image:
      "https://cdn.pixabay.com/photo/2016/04/26/16/58/bananas-1354785_1280.jpg",
  },
  {
    id: 3,
    name: "blueberries",
    room_temp: "not recommended",
    refrigerator_temp: "1 to 2 weeks",
    freezer_temp: "8 to 12 months",
    image:
      "https://cdn.pixabay.com/photo/2018/05/26/21/21/blueberries-3432295_1280.jpg",
  },
  {
    id: 4,
    name: "strawberries",
    room_temp: "Not recommended",
    refrigerator_temp: "2 to 3 days",
    freezer_temp: "8 to 12 months",
    image:
      "https://cdn.pixabay.com/photo/2019/07/11/07/29/strawberries-4330211_960_720.jpg",
  },
  {
    id: 5,
    name: "pineapples",
    room_temp: "until ripe",
    refrigerator_temp: "5 to 7 days",
    freezer_temp: "8 to 12 months",
    image:
      "https://cdn.pixabay.com/photo/2011/03/24/11/03/pineapple-5792_960_720.jpg",
  },
  {
    id: 6,
    name: "grapefruits",
    room_temp: "10 days",
    refrigerator_temp: "10 to 21 days",
    freezer_temp: "4 to 6 months",
    image:
      "https://cdn.pixabay.com/photo/2016/11/02/16/49/grapefruits-1792233_960_720.jpg",
  },
  {
    id: 7,
    name: "grapes",
    room_temp: "1 day",
    refrigerator_temp: "1 week",
    freezer_temp: "1 month",
    image:
      "https://cdn.pixabay.com/photo/2018/09/22/23/43/grapes-3696472_960_720.jpg",
  },
  {
    id: 8,
    name: "peaches",
    room_temp: "until ripe",
    refrigerator_temp: "3-5 days",
    freezer_temp: "8 to 12 months",
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/08/11/food-2563403_960_720.jpg",
  },
  {
    id: 9,
    name: "melons",
    room_temp: "until ripe",
    refrigerator_temp: "2 weeks",
    freezer_temp: "1 month for balled melon",
    image:
      "https://cdn.pixabay.com/photo/2021/04/19/11/06/melon-6191136_960_720.jpg",
  },
  
];

users.each do |user|
    User.create!(user) 
end

shlves.each do |shlf|
    Shlf.create!(shlf)
end

blogs.each do |blog|
    Blog.create!(blog)
end
