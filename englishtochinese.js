

{
  "condition":{
    "all":[
      {"path":"client.javascript.language","ncontains":"en-"},
      {"path":"client.javascript.language","ncontains":"cn-"},
    ]
  },
  "fingerprint": "non-supported language error",
  "title": "non-supported language error"
}

document.getElementById('chinese').addEventListener('click', function entocn() , false);
document.getElementById('english').addEventListener('click', function cntoen() , false);

function entocn() {
  document.getElementById("p1").textContent = "Helper Sunday是2021年咔咔青少年领导获奖项目之一，是梓豪和Jim一起策划和执行的，是一个旨在为社区服务的项目。 Helper Sunday 开始专注于帮助 Beacon Hill 社区，在为期 10 周的周期中，我们平均每个活动都有 15-20 人参与。我们希望以后能把Helper Sunday扩展到其他社区。";
  document.getElementById("p2").textContent = "Helper Sunday分为Garbage Day和Ivy Day，以及复活节的复活节彩蛋狩猎和最后一周的庆祝活动。";
  document.getElementById("p3").textContent = "作为Ivy Day的一部分，我们进入树林，去除常春藤并挖掘黑莓，目的是为本地植物创造一个茁壮成长的区域，这是通过拉常春藤和挖掘黑莓来完成的。从解释抵御入侵植物的重要性到教我们如何正确使用这些工具，在新星小学副校长Ms.Kovach专业和家长们的大力支持下，清除常青藤日很成功，我们安全地为新星小学附近的树林里清除了很大的一片区域。";
  document.getElementById("p4").textContent = "除了常春藤日，我们还有一个名为“垃圾日”的活动，我们在社区中捡拾垃圾。在我们的垃圾日活动中，我们从新星小学到华人浸信会收集垃圾，总共收集了六大袋垃圾。 Garbage Day 既可以帮助清洁我们的社区，也可以提高我们保护环境的意识，而且令人放松和愉快，我们希望可以把 Garbage Day活动一直坚持下去。";
  document.getElementById("p5").textContent = " Helper Sunday 的最后一周，我们举行了庆祝活动，以表彰我们辛勤工作的大小义工们。我们带来的食物种类繁多，既有比萨、可乐等常见的食物，也有铜锣烧、旺旺牛奶等小朋友们喜欢的亚洲零食，活动中有些人玩飞盘，有些人玩棋盘游戏，有些人聚在一起聊天，大家都玩得很开心！";
  document.getElementById("p6").textContent = "活动日标志着我们的周日助手计划的结束，但还没有结束。 Helper Sunday 计划将于 9 月 4 日恢复，但会有重大变化。 路途漫长，一路艰辛。 CACA 和所有支持我们计划的人都值得我们感谢。 感谢大家的支持，我们将永远感激不尽。 没有我们出色的助手，星期天的助手就不会是今天的样子。 如果您有兴趣下次加入我们，请点击以下链接";
}

function cntoen() {
  document.getElementById("p1").textContent = "Founded and led by Zihao and Jim,Helper Sunday is a community service program that aims to serve the community. Helper Sunday focuses on helping the Beacon Hill community, but we hope to expand beyond it. Over the course of its 10-week cycle, our program has averaged 15-20 attendees per event.Our original idea for Helper Sunday was created in November of 2021, when we were brainstorming ideas to give back to our community. Two ideas came to mind, an outdoor program and a volunteering program. Instead of having 2 separate events, we discarded our original plans and focused on making Helper Sunday the best it could be, incorporating elements of the outdoor program into it.";
  document.getElementById("p2").textContent = "For our first ever launch, we chose a theme, outdoors. A few months later, by the end of February, we had organized two events, Garbage Day and Ivy Day, as well as an Easter egg hunt on Easter and a celebration on our final week.";
  document.getElementById("p3").textContent = "As part of Ivy Day, we go into the woods and remove ivy and dig up blackberries, with the intention of creating an area for native plants to thrive, this is done by pulling ivy and digging blackberries. From explaining the importance of warding off invasive plants to teaching us how to use the tools properly, the forest stewardess and vice principal of Rising Star Elementary School, Ms. Kovach, makes the Ivy Day program possible thanks to her dedication and tremendous efforts. ";
  document.getElementById("p4").textContent = "Besides Ivy Day, we also have an event called Garbage Day where we pick up trash that is out in our community. During our Garbage Day events, we collected trash from Rising Star Elementary School to Chinese Baptist Church, collecting six large bags of trash in total. The fact that Garbage Day was not only a good form of exercise, it was also relaxing and enjoyable made us wish that we could host Garbage Day at least one more time.";
  document.getElementById("p5").textContent = " Although we faced many challenges, we overcame them, demonstrating that Helper Sunday is strong and committed to serving the community. Despite the constant work, we all enjoyed Helper Sunday. As Helper Sunday's final week approached, we held a celebration to recognize our accomplishments, hard work, and how far we’ve come. The food we brought was diverse, including some common foods like pizza and coke, and also some more unusual foods like dorayaki and Want Want milk. All our helpers enjoyed themselves as some played frisbee and others played board games, it was truly a great way to wrap up the program.";
  document.getElementById("p6").textContent = "Activity Day marks the end of our Helper Sunday Program, but it is not quite over. The Helper Sunday program will resume on September 4th, with major changes. The journey has been a long one, filled with hardships along the way. CACA and all those who supported our program deserve our appreciation. Thanks to everyone for their support, we will be forever grateful. Without our amazing Helpers, Helper Sunday wouldn't be what it is today. If you are interested in joining us next time, click on the link below";
}

