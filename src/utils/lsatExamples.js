// LSAT few-shot examples — keyed by question type
// Each entry contains real example questions in the exact output format
// the model uses, so they can be injected into the system prompt.

const lsatExamples = {

  "Necessary Assumption": [
    `QUESTION 1
Type: Necessary Assumption
Difficulty: Easy
Domain: Law-adjacent topics

Editorial: The city has chosen a contractor to upgrade the heating systems in public buildings. Only 40 percent of the technicians employed by this contractor are certified by the Heating Technicians Association. So the city selected a contractor 60 percent of whose technicians are unqualified, which is an outrage.

Which one of the following is an assumption required by the argument in the editorial?

(A) Certified technicians receive higher pay than uncertified technicians.
(B) There are no contractors with fewer than 40 percent of their technicians certified.
(C) Technicians who lack certification are not qualified technicians.
(D) Qualified technicians installed the heating systems to be upgraded.
(E) The contractor hired by the city has personal ties to city officials.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): If a technician lacks certification, then he or she is not qualified. That is the core assumption bridging "uncertified" to "unqualified" — the exact equivocation the argument makes.
- Wrong (A): The argument has nothing to do with pay. Whether certified technicians earn more is irrelevant to whether uncertified ones are unqualified.
- Wrong (B): The argument focuses on the one contractor hired, not on comparisons to other contractors.
- Wrong (D): What qualified technicians did in the past is irrelevant to the present argument.
- Wrong (E): The argument does not address why this contractor was hired, only whether the technicians are qualified.

SUMMARY:
The city hired a contractor with a lot of uncertified technicians. The editorial concludes those technicians are unqualified. The hidden assumption is that uncertified equals unqualified — but those are not necessarily the same thing.

ANTICIPATION:
The math is fine: if 40 percent are certified, 60 percent are not. But the conclusion calls them "unqualified," not just "uncertified." A technician could be highly skilled without holding a certification. The argument silently treats certification as the only measure of qualification — that is the assumption to look for.`,

    `QUESTION 8
Type: Necessary Assumption
Difficulty: Easy
Domain: Biology / medicine

Biologist: Marine animals known as box jellyfish have eyes with well-formed lenses capable of producing sharp images that reveal fine detail. But the box jellyfish's retinas are too far forward to receive a clear image, so these jellyfish can receive only a blurry image that reveals prominent features of objects but not fine detail. This example shows that eyes are adapted only to an animal's needs rather than to some abstract sense of how a good eye would be designed.

The argument requires assuming which one of the following?

(A) Box jellyfish are the only kind of jellyfish with retinas that do not focus clearly.
(B) Box jellyfish have a need to detect prominent features of objects but not fine details.
(C) Box jellyfish would benefit from having retinas that allowed their eyes to focus more sharply.
(D) Box jellyfish developed from jellyfish whose retinas received clear images.
(E) Box jellyfish use vision as their main means of detecting prey.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): The argument concludes that the jellyfish's blurry vision is adapted to its needs. For that to hold, the jellyfish must actually need blurry rather than sharp vision. This assumption ties the observed eye structure to the concept of need.
- Wrong (A): Other jellyfish are irrelevant. The argument only concerns box jellyfish.
- Wrong (C): If the jellyfish would benefit from sharper eyes, that actually weakens the argument — it suggests the eyes are not well-adapted to the animal's needs.
- Wrong (D): The ancestry of box jellyfish does not affect whether their current eyes serve their current needs.
- Wrong (E): Whether the jellyfish hunts by vision is irrelevant. What matters is whether it needs to see blurry things rather than fine detail, regardless of purpose.

SUMMARY:
Box jellyfish have great lenses but poorly positioned retinas, so they only see blurry images. The author concludes this means eyes evolve to fit an animal's needs, not to achieve some ideal standard of vision.

ANTICIPATION:
The concept of "needs" appears suddenly in the conclusion but nowhere in the premises. The premises only describe the eye structure. The argument assumes the jellyfish's blurry vision is exactly what it needs — but what if sharper vision would actually help it? The necessary assumption is that the jellyfish only needs to detect prominent features, not fine detail.`,

    `QUESTION 20
Type: Necessary Assumption
Difficulty: Medium
Domain: Environmental science / ecology

The advent of chemical fertilizers led the farmers in a certain region to abandon the practice of periodically growing a "green-manure" crop, such as alfalfa, in a field to rejuvenate its soil. As a result, the soil structure in a typical farm field in the region is poor. So to significantly improve the soil structure, farmers will need to abandon the use of chemical fertilizers.

The argument relies on the assumption that

(A) most, if not all, farmers in the region who abandon the use of chemical fertilizers will periodically grow alfalfa.
(B) applying chemical fertilizers to green-manure crops, such as alfalfa, has no positive effect on their growth.
(C) the most important factor influencing the soil quality of a farm field is soil structure.
(D) chemical fertilizers themselves have a destructive effect on the soil structure of farm fields.
(E) many, if not all, farmers in the region will not grow green-manure crops unless they abandon the use of chemical fertilizers.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): The argument concludes that farmers must stop using chemical fertilizers to fix the soil. This only follows if farmers cannot do both — use fertilizers and grow green-manure crops. If they could do both, abandoning fertilizers would be unnecessary. The argument assumes the two practices are mutually exclusive.
- Wrong (A): Alfalfa is only one example of a green-manure crop. The argument does not require alfalfa specifically.
- Wrong (B): Whether fertilizers help alfalfa grow is irrelevant to the exclusivity assumption.
- Wrong (C): The argument is about improving soil structure specifically, not about ranking factors affecting soil quality.
- Wrong (D): The problem identified is not that fertilizers damage soil directly, but that they caused farmers to stop using green-manure practices. Fertilizers do not need to be harmful themselves.

SUMMARY:
Farmers used to plant alfalfa to replenish the soil. They stopped because chemical fertilizers came along. Now the soil is depleted. The author concludes they must stop using fertilizers to fix the soil — assuming they cannot do both.

ANTICIPATION:
The conclusion says farmers must abandon fertilizers. But the premises only say that fertilizers caused farmers to stop using green-manure crops. Could they not just start doing both? The argument assumes they cannot — that using fertilizers means they will never plant green-manure crops. That exclusivity is the necessary assumption.`,

    `QUESTION B13
Type: Necessary Assumption
Difficulty: Medium
Domain: Technology and its social effects

In early 2003, scientists detected methane in the atmosphere of Mars. Methane is a fragile compound that falls apart when hit by the ultraviolet radiation in sunlight. So any methane in the Martian atmosphere must have been released into the atmosphere relatively recently.

The argument relies on the assumption that

(A) Mars had no methane in its atmosphere prior to 2003.
(B) all methane in the Martian atmosphere is eventually exposed to sunlight.
(C) methane cannot be detected until it has started to fall apart.
(D) the methane that the scientists detected had been exposed to ultraviolet radiation.
(E) methane in Earth's atmosphere does not fall apart as a result of exposure to ultraviolet radiation.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): If the methane weren't exposed to sunlight, it could float around forever without breaking down. The argument requires that methane in the Martian atmosphere eventually gets exposed to the sun.
- Wrong (A): They discovered methane in 2003, but that doesn't mean there was none before. Older methane could have existed and already broken down.
- Wrong (C): They might have just found intact methane. They don't have to detect it mid-breakdown.
- Wrong (D): If it had already been exposed to ultraviolet radiation, it would have broken down. The argument doesn't require the detected methane to have already been exposed — just that it will be eventually.
- Wrong (E): We don't need to assume anything about Earth. Whether or not methane breaks down here doesn't affect the argument about Mars.

SUMMARY:
There's methane in the Martian atmosphere. Methane breaks down when exposed to ultraviolet radiation from sunlight. So the methane on Mars must not have been there for long.

ANTICIPATION:
The big assumption here is that methane in the Martian atmosphere would be exposed to ultraviolet radiation from sunlight. If it weren't, it could just persist forever up there, and the argument would fall apart.`,

    `QUESTION B19
Type: Necessary Assumption
Difficulty: Hard
Domain: Psychology and behavior

Young people believe efforts to reduce pollution, poverty, and war are doomed to failure. This pessimism is probably harmful to humanity's future, because people lose motivation to work for goals they think are unrealizable. We must do what we can to prevent this loss of motivation and therefore must enable our children to believe that better futures are possible.

Which one of the following is an assumption on which the argument depends?

(A) Motivating people to work to solve humanity's problems will enable them to believe that the future can be better and will cause them to be less pessimistic.
(B) Enabling people to believe that better futures are possible will help prevent the loss of motivation that results from pessimistic beliefs about the future.
(C) Optimism about the future is better than pessimism, even if that optimism is based on an illusory vision of what is likely to occur.
(D) If future generations believe that the future can be better, then pollution, poverty, and war will be eliminated.
(E) The current prevalence of such problems as pollution and poverty stems from previous generations' inability to believe that futures can be better.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): This is the answer. If helping people believe the future can be better didn't increase their motivation, the recommendation would fall apart. Negate it: if enabling people to believe in better futures won't prevent the loss of motivation — then why are we trying to do that?
- Wrong (A): This gets it backwards. The idea in the stimulus is to make people believe the future can be better so they're more motivated, not the other way around.
- Wrong (C): It's not about optimism in general — it's about motivating people to make change. Optimism being better in general doesn't connect to the argument's recommendation.
- Wrong (D): Nobody said we're going to fix everything if only we believe. We just need belief to help people work toward a better future.
- Wrong (E): The argument isn't about what caused the problems in the world. It's about how to address them.

SUMMARY:
Young people just don't think that things will get better. When people don't think change is possible, they lose the motivation to make change happen, and that's bad. So we need to make our children believe that a better world is possible.

ANTICIPATION:
The premises say that when people don't believe change is possible, they lose motivation to work for it. But we don't know that it works the other way — that believing change is possible restores motivation. That's the assumption the argument needs.`,

    `QUESTION B26
Type: Necessary Assumption
Difficulty: Hard
Domain: Environmental science / ecology

Farmer: Crops genetically engineered to produce toxins that enable them to resist insect pests do not need to be sprayed with insecticides. Since excessive spraying of insecticides has harmed wildlife populations near croplands, using such genetically engineered crops more widely is likely to help wildlife populations to recover.

Which one of the following is an assumption the farmer's argument requires?

(A) Use of the crops that have been genetically engineered to resist insect pests in place of crops that have been sprayed with insecticides will cause less harm to wildlife populations.
(B) Wildlife populations that have been harmed by the excessive spraying of insecticides on croplands are likely to recover if the amount of insecticides sprayed on those croplands is reduced even slightly.
(C) Crops that have been genetically engineered to resist insect pests are never sprayed with insecticides that harm wildlife populations.
(D) Use of crops that have been genetically engineered to resist insect pests is no more costly to farmers than the use of insecticides on crops that are not genetically engineered.
(E) If a wider use of certain crops that have been genetically engineered to resist insect pests is likely to help at least some wildlife populations to recover, it is likely to have that effect only because its use will prevent excessive and ineffective spraying of insecticides on croplands.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): This is the answer. If genetically engineered crops are going to help wildlife, they need to cause less harm to wildlife than the spraying they replace. The crops produce their own toxins — what if those toxins hurt wildlife too? The argument needs to assume they don't, or at least that they're less harmful.
- Wrong (B): The genetically engineered crops eliminate spraying entirely, not just reduce it. An assumption about slight reductions is too weak and too specific to be necessary.
- Wrong (C): We already know the crops don't need to be sprayed. If one farmer sprayed anyway, that wouldn't ruin the whole argument. "Never" is too strong.
- Wrong (D): Cost to farmers is totally irrelevant to whether the crops would help wildlife recover.
- Wrong (E): This starts with the conclusion as a condition and then restricts the mechanism. If the crops helped wildlife in other ways too, that wouldn't hurt the argument at all.

SUMMARY:
Spraying insecticide on crops has hurt wildlife. Genetically engineered crops don't need to be sprayed. So using those crops will help wildlife recover.

ANTICIPATION:
The genetically engineered crops don't need insecticide, but they produce their own toxins. The big assumption is that those built-in toxins don't harm wildlife as much as the spraying would. Expect the answer to say the engineered crops cause less harm to wildlife than the spraying they replace.`
  ],

  "Unexpected Result": [
    `QUESTION 2
Type: Unexpected Result
Difficulty: Easy
Domain: Psychology and behavior

Jeneta: Increasingly, I've noticed that when a salesperson thanks a customer for making a purchase, the customer also says "Thank you" instead of saying "You're welcome." I've even started doing that myself. But when a friend thanks a friend for a favor, the response is always "You're welcome."

Which one of the following, if true, most helps to explain the discrepancy that Jeneta observes in people's responses?

(A) Customers regard themselves as doing salespeople a favor by buying from them as opposed to someone else.
(B) Salespeople are often instructed by their employers to thank customers, whereas customers are free to say what they want.
(C) Salespeople do not regard customers who buy from them as doing them a favor.
(D) The way that people respond to being thanked is generally determined by habit rather than by conscious decision.
(E) In a commercial transaction, as opposed to a favor, the customer feels that the benefits are mutual.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): If customers feel the benefits are mutual in a commercial transaction, they also feel they received something worth thanking the salesperson for — explaining why they say "thank you" instead of "you're welcome." This directly resolves the discrepancy.
- Wrong (A): If customers felt they were doing the salesperson a favor, they would say "you're welcome," not "thank you." This contradicts the observed behavior.
- Wrong (B): This explains why salespeople say thank you, but not why customers respond with "thank you" instead of "you're welcome."
- Wrong (C): The salesperson's perspective is irrelevant. The discrepancy concerns how customers respond.
- Wrong (D): Habit could explain consistent behavior, but not why the habit differs between commercial and personal contexts.

SUMMARY:
When a salesperson thanks a customer, the customer often says "thank you" back instead of "you're welcome." But with friends, "you're welcome" is the standard response. Why the difference?

ANTICIPATION:
The answer needs to explain why the commercial context produces a different response than the personal one. In a favor, the exchange is one-sided — only one person benefits, so "you're welcome" fits. In a purchase, something changes. Expect the answer to identify what is different about a commercial transaction that makes the customer also feel grateful.`,

    `QUESTION 24
Type: Unexpected Result
Difficulty: Hard
Domain: Psychology and behavior

A survey of a city's concertgoers found that almost all of them were dissatisfied with the local concert hall. A large majority of them expressed a strong preference for wider seats and better acoustics. And, even though the survey respondents were told that the existing concert hall cannot feasibly be modified to provide these features, most of them opposed the idea of tearing down the existing structure and replacing it with a concert hall with wider seats and better acoustics.

Which one of the following, if true, most helps to explain the apparent conflict in the concertgoers' views, as revealed by the survey?

(A) Before any of the survey questions were asked, the respondents were informed that the survey was sponsored by a group that advocates replacing the existing concert hall.
(B) Most of the people who live in the vicinity of the existing concert hall do not want it to be torn down.
(C) The city's construction industry will receive more economic benefit from the construction of a new concert hall than from renovations to the existing concert hall.
(D) A well-publicized plan is being considered by the city government that would convert the existing concert hall into a public auditorium and build a new concert hall nearby.
(E) Many popular singers and musicians who currently do not hold concerts in the city would begin to hold concerts there if a new concert hall were built.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): If the city is already planning to build a new concert hall nearby, concertgoers would have no reason to support tearing down the existing one — they would get both. This explains why they oppose demolition despite wanting better facilities.
- Wrong (A): Who sponsored the survey does not explain why concertgoers both want better features and oppose demolition.
- Wrong (B): The views of nearby residents are irrelevant to the concertgoers' apparent contradiction.
- Wrong (C): The construction industry's economic interests do not explain the concertgoers' conflicting preferences.
- Wrong (E): This would give concertgoers more reason to want a new hall, which deepens the conflict rather than resolving it.

SUMMARY:
Concertgoers hate their concert hall and want better seats and acoustics. They were told the hall can't be renovated to provide those things. Yet most of them opposed tearing the hall down to build a better one. That seems contradictory.

ANTICIPATION:
Why would someone want a better concert hall but oppose building one? There must be something that makes tearing down the existing one unnecessary or undesirable — perhaps another plan already in place, or some attachment to the existing building.`,

    `QUESTION B15
Type: Unexpected Result
Difficulty: Easy
Domain: Biology / medicine

Hine's emerald dragonflies are an endangered species that live in wetlands. The larvae of these dragonflies can survive only in the water, where they are subject to predation by several species including red devil crayfish. Surprisingly, the dragonfly populations are more likely to remain healthy in areas where red devil crayfish are present than in areas without red devil crayfish.

Which one of the following, if true, most helps to explain the surprising fact?

(A) Red devil crayfish dig chambers that remain filled with water even when the surrounding wetlands dry up.
(B) Red devil crayfish present no threat to adult Hine's emerald dragonflies.
(C) The varied diet of the red devil crayfish does not include any animal species that prey on dragonfly larvae.
(D) Red devil crayfish are found in many more locations than Hine's emerald dragonflies are.
(E) Populations of red devil crayfish in a wetland do not drop significantly if the local population of Hine's emerald dragonflies dies out.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): This helps explain why the crayfish help the dragonflies. They dig pools that stay full of water even when wetlands dry up — where otherwise the dragonfly larvae would be wiped out. That explains how they could help despite eating some larvae.
- Wrong (B): We know they eat the babies. It doesn't matter whether they also eat adults. If they ate all the babies, there wouldn't be any adults.
- Wrong (C): If they ate the dragonfly larvae's other predators, that might help. But if they don't, we're stuck in the same place.
- Wrong (D): The crayfish being more common than the dragonflies doesn't explain why dragonflies do better where crayfish are present.
- Wrong (E): We're trying to explain why dragonflies do better where there are crayfish. What happens when dragonflies die out isn't the issue.

SUMMARY:
Some dragonflies live in the swamps. The babies can only live in water, where they often get eaten — including by the bad-ass sounding red devil crayfish. But oddly, dragonfly populations do better where there are red devil crayfish than where there aren't any.

ANTICIPATION:
We're looking to explain why dragonfly populations are stronger in areas with red devil crayfish, even though the crayfish eat the larvae. Maybe the crayfish do something that helps the dragonflies overall, despite eating some of them.`,

    `QUESTION B22
Type: Unexpected Result
Difficulty: Hard
Domain: Economics and public policy

Advertising tends to have a greater influence on consumer preferences regarding brands of yogurt than it does on consumer preferences regarding brands of milk. Yet, since the LargeCo supermarket chain began advertising its store-brand products, sales of its store-brand milk increased more than sales of its store-brand yogurt.

Which one of the following, if true, most helps to resolve the apparent discrepancy described above?

(A) There has recently been increased demand at LargeCo stores for the chain's own brand of yogurt as well as for other brands of yogurt.
(B) The typical shopper going to LargeCo for the purpose of buying milk does not go with the intention of also buying yogurt.
(C) Shoppers at LargeCo tend to purchase the chain's own brand of dairy products more frequently than other brands of dairy products.
(D) Supermarkets throughout the entire nation have experienced a sharp decrease in sales of yogurt recently.
(E) Consumers tend to purchase store brands of yogurt, but purchase whichever brand of milk is least expensive.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): Yogurt sales are down everywhere. That explains why LargeCo's milk sales increased more after the ad campaign. The campaign might have had a big effect on yogurt — it kept sales from falling way down — even if the absolute increase was smaller than milk's.
- Wrong (A): Everyone's buying yogurt. That doesn't explain why LargeCo's store-brand milk sales took off more than yogurt.
- Wrong (B): People don't buy milk and yogurt together. Odd, but this doesn't explain why milk sales bucked the general pattern.
- Wrong (C): They like the store brand. Maybe it's cheap or fresh. But this doesn't explain why milk increased more than yogurt.
- Wrong (E): Interesting, but we don't know whether their store-brand milk was the least expensive brand. The ad campaign doesn't necessarily affect price.

SUMMARY:
Advertising usually does more for yogurt sales than milk sales. But LargeCo advertised both and saw their store-brand milk sales go up more than their yogurt sales.

ANTICIPATION:
LargeCo seems to go against the usual pattern. The answer might identify why LargeCo was an exception, or identify some other factor that pushed milk sales higher relative to yogurt — like yogurt sales being depressed overall.`
  ],

  "Flaw": [
    `QUESTION 3
Type: Flaw
Difficulty: Easy
Domain: Technology and its social effects

Some video game makers have sold the movie rights for popular games. However, this move is rarely good from a business perspective. After all, StarQuanta sold the movie rights to its popular game Nostroma, but the poorly made film adaptation of the game was hated by critics and the public alike. Subsequent versions of the Nostroma video game, although better than the original, sold poorly.

The reasoning in the argument is most vulnerable to criticism in that the argument

(A) draws a general conclusion on the basis of just one individual case.
(B) infers that a product will be disliked by the public merely from the claim that the product was disliked by critics.
(C) restates as a conclusion a claim earlier presented as evidence for that conclusion.
(D) takes for granted that products with similar content that are in different media will be of roughly equal popularity.
(E) treats a requirement for a product to be popular as something that ensures that a product will be popular.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): The argument concludes that selling movie rights is "rarely good" based on a single case — StarQuanta and Nostroma. One example cannot support a general conclusion. This is a classic hasty generalization.
- Wrong (B): The argument states the movie was disliked by both critics and the public — there is no inference from critics to public.
- Wrong (C): The argument moves from one example to a general conclusion; it does not repeat its conclusion as evidence.
- Wrong (D): The argument discusses one case where a popular game produced a flop movie — it does not assume similar popularity across media.
- Wrong (E): The argument introduces no sufficient or necessary conditions for popularity.

SUMMARY:
One video game company sold the movie rights to a popular game. The movie flopped, and the next version of the game also sold poorly. From this, the argument concludes that selling movie rights is almost never a good business move.

ANTICIPATION:
Can you conclude that something "rarely" works based on one bad example? No. There could be hundreds of successful cases. The argument generalizes from a single instance to a broad pattern — that is the flaw.`,

    `QUESTION 13
Type: Flaw
Difficulty: Medium
Domain: Law-adjacent topics

Reformer: A survey of police departments keeps track of the national crime rate, which is the annual number of crimes per 100,000 people. The survey shows no significant reduction in the crime rate in the past 20 years, but the percentage of the population in prison has increased substantially, and public expenditure on prisons has grown at an alarming rate. This demonstrates that putting more people in prison cannot help to reduce crime.

A flaw in the reformer's argument is that it

(A) infers without justification that because the national crime rate has increased, the number of crimes reported by each police department has increased.
(B) ignores the possibility that the crime rate would have significantly increased if it had not been for the greater rate of imprisonment.
(C) overlooks the possibility that the population has increased significantly over the past 20 years.
(D) presumes, without providing warrant, that alternative measures for reducing crime would be more effective than imprisonment.
(E) takes for granted that the number of prisoners must be proportional to the number of crimes committed.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): The argument assumes that if imprisonment worked, crime rates would have dropped. But imprisonment might have prevented crime from rising even further. The argument ignores the counterfactual: what would the crime rate have been without increased imprisonment?
- Wrong (A): The argument never claims crime rates increased — it says they did not significantly decrease.
- Wrong (C): Both the crime rate and prison population are expressed as percentages of the population, so population changes are already accounted for.
- Wrong (D): The argument never mentions alternative measures.
- Wrong (E): The argument makes no claim about proportionality between prisoners and crimes.

SUMMARY:
Over 20 years, the prison population grew dramatically, but the crime rate did not drop. The reformer concludes that imprisonment cannot help reduce crime.

ANTICIPATION:
If you are sick and take medicine but do not immediately recover, does that mean the medicine failed? Maybe it kept you from getting worse. The same logic applies here. The crime rate staying flat does not prove imprisonment is useless — it might have prevented a much larger increase. The flaw is ignoring the counterfactual.`,

    `QUESTION 18
Type: Flaw
Difficulty: Hard
Domain: History and social science

Critic: An art historian argues that because fifteenth-century European paintings were generally more planimetric (that is, two-dimensional with no attempt at suggesting depth) than were sixteenth-century paintings, fifteenth-century painters had a greater mastery of painting than did sixteenth-century painters. However, this conclusion is wrong. Fifteenth-century European painters did not have a greater mastery of painting, for the degree to which a painting is planimetric is irrelevant to the painter's mastery.

The argument is flawed in that it

(A) rejects a position merely because the proponent of the position has other objectionable views.
(B) illicitly relies on two different meanings of the term "mastery."
(C) takes a necessary condition for an argument's being inadequate to be a sufficient condition for an argument's being inadequate.
(D) bases its conclusion on two claims that contradict each other.
(E) rejects a position on the grounds that an inadequate argument has been made for it.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): The critic correctly shows the art historian's argument is flawed, then concludes that the art historian's conclusion is therefore false. But a bad argument for a position does not make the position false. The conclusion might still be true, just not supported by this argument.
- Wrong (A): The critic never attacks the art historian personally or references other views the historian holds.
- Wrong (B): "Mastery" is used consistently throughout to mean skill at painting.
- Wrong (C): The critic's premise — that planimetric quality is irrelevant to mastery — actually does provide a valid reason to reject the argument, so there is no necessary/sufficient confusion.
- Wrong (D): The claims in the argument do not contradict each other.

SUMMARY:
An art historian argues that because older paintings were more two-dimensional, older painters were more skilled. The critic says that two-dimensionality is irrelevant to skill, so the art historian is wrong. But the critic's move from "bad argument" to "false conclusion" is itself a logical error.

ANTICIPATION:
Showing that an argument is poorly constructed does not prove its conclusion is false. The fifteenth-century painters might or might not have had greater mastery — we simply cannot know from this argument. The critic wrongly treats a failed argument as proof the conclusion is wrong.`,

    `QUESTION B3
Type: Flaw
Difficulty: Easy
Domain: Biology / medicine

Moore: Sunscreen lotions, which are designed to block skin-cancer-causing ultraviolet radiation, do not do so effectively. Many scientific studies have shown that people who have consistently used these lotions develop, on average, as many skin cancers as those who have rarely, if ever, used them.

The reasoning in Moore's argument is most vulnerable to criticism on the grounds that the argument

(A) takes for granted that there are no other possible health benefits of using sunscreen lotions other than blocking skin-cancer-causing ultraviolet radiation.
(B) fails to distinguish between the relative number of cases of skin cancer and the severity of those cases in measuring effectiveness at skin cancer prevention.
(C) fails to consider the effectiveness of sunscreen lotions that are not specifically designed to block skin-cancer-causing ultraviolet radiation.
(D) relies on evidence regarding the probability of people in different groups developing cancer that, in principle, would be impossible to challenge.
(E) overlooks the possibility that people who consistently use sunscreen lotions spend more time in the sun, on average, than people who do not.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): This is the winner. If people who use lots of sunscreen are people who spend all day in the sun, that explains why they get lots of skin cancer despite the sunscreen. They'd probably get even more skin cancer without it.
- Wrong (A): The conclusion is only about sunscreen's effectiveness at preventing skin cancer. Other benefits are irrelevant.
- Wrong (B): Severity might be relevant, but we know people who use lots of sunscreen get just as much skin cancer as people who never use it. Severity can't explain that away.
- Wrong (C): The argument is only about normal sunscreen that's intended to protect you from the sun.
- Wrong (D): The premises might be true. The issue isn't whether the evidence is challengeable, it's whether the conclusion follows.

SUMMARY:
People who slather on buckets of sunscreen get just as much skin cancer as people who don't. So sunscreen doesn't actually prevent skin cancer.

ANTICIPATION:
This evidence sounds damning. But consider who's more likely to use lots of sunscreen. Maybe they're people with really pale skin who spend all day outside. They might get tons more cancer without sunscreen. Expect the answer to say the argument ignores an alternative explanation for why heavy sunscreen users get lots of skin cancer.`,

    `QUESTION B25
Type: Flaw
Difficulty: Hard
Domain: Psychology and behavior

Roberta is irritable only when she is tired, and loses things only when she is tired. Since she has been yawning all day, and has just lost her keys, she is almost certainly irritable.

The reasoning above is flawed in that it

(A) infers from a correlation between tiredness and yawning that tiredness causes yawning.
(B) assumes the conclusion that it sets out to prove.
(C) generalizes on the basis of a single instance.
(D) takes a necessary condition for Roberta's losing things to be a sufficient condition.
(E) takes a necessary condition for Roberta's being irritable to be a sufficient condition.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): This is the answer. Being tired is necessary for Roberta to be irritable. The argument thinks that since she's tired, she must be irritable. That's the converse fallacy — it treats a necessary condition as if it were sufficient.
- Wrong (A): The conclusion doesn't say anything about causation. The yawning bit is pretty irrelevant to the argument's logic anyway.
- Wrong (B): There's nothing circular here. The conclusion would have to appear in the premises for that.
- Wrong (C): The conclusion is about right now. There's no generalizing going on.
- Wrong (D): This answer discusses the right kind of flaw, but relates it to the wrong premise. We can validly conclude Roberta is tired from losing her keys.

SUMMARY:
If Roberta is irritable, she's tired. If she loses things, she's tired. She just lost her keys. So she must be irritable. But that's a big leap.

ANTICIPATION:
Roberta lost her keys. That means she's tired — that much follows. But being tired doesn't mean she's irritable. Being tired is a necessary condition for irritability, not a sufficient one. The argument commits the converse fallacy.`
  ],

  "Apply the Principle": [
    `QUESTION 4
Type: Apply the Principle
Difficulty: Easy
Domain: Economics and public policy

Principle: The executive in a given company whose compensation package is determined by advice of an external consultant is likely to be overcompensated if the consultant also has business interests with the company the executive manages.

Which one of the following judgments conforms most closely to the principle stated above?

(A) The president of the Troskco Corporation is definitely overpaid, since he receives in salary and benefits almost 40 times more than the average employee of Troskco receives.
(B) The president of the Troskco Corporation is probably overpaid, since his total annual compensation package was determined five years ago, when the company's profits were at an all-time high.
(C) The president of the Troskco Corporation is probably not overpaid, since his total compensation package was determined by the Troskco board of directors without retaining the services of an external compensation consultant.
(D) The president of Troskco Corporation is probably overpaid, since the Troskco board of directors determined his compensation by following the advice of an external consultant who has many other contracts with Troskco.
(E) The president of Troskco Corporation is definitely not overpaid, since the external consultant the board of directors retained to advise on executive salaries has no other contracts with Troskco.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): External consultant — check. That consultant has business interests with the company — check. Therefore the president is probably overpaid — check. This satisfies every condition of the principle.
- Wrong (A): The principle does not compare the executive to other employees. Relative pay ratios are irrelevant.
- Wrong (B): The time frame of the compensation decision is not part of the principle. The principle concerns only whether a biased external consultant was involved.
- Wrong (C): This is the inverse of the principle. Absence of a biased consultant does not mean the executive is not overpaid.
- Wrong (E): Like C, this is the inverse. Even without a biased consultant, the executive could still be overpaid for other reasons.

SUMMARY:
If an outside consultant who has business ties to a company also determines how much the company's executive gets paid, that executive is probably getting too much. We need an answer that matches this pattern exactly.

ANTICIPATION:
The principle sets up a conditional: biased external consultant involved → executive probably overpaid. Look for an answer that has both elements: an external consultant who determines pay AND that consultant has business interests with the company. Watch out for the inverse — the absence of a biased consultant does not mean the executive is not overpaid.`,

    `QUESTION B2
Type: Apply the Principle
Difficulty: Easy
Domain: Law-adjacent topics

Residents of a coastal community are resisting the efforts of one family to build a large house on the family's land. Although the house would not violate any town codes, the land in question is depicted in a painting by a famous and beloved landscape painter who recently died. Residents argue that the house would alter the pristine landscape and hence damage the community's artistic and historic heritage.

Which one of the following principles, if valid, most helps to justify the reasoning of the residents opposed to building the house?

(A) Every possible effort should be made to preserve historic buildings that are well known and well loved.
(B) Communities that seek to preserve undeveloped areas of landscape or historic neighborhoods should purchase those properties for the public trust.
(C) Artists who choose to represent actual landscapes in their paintings have the right to demand that the owners of the land do not significantly alter the landscape.
(D) The right to build on one's own property is constrained by the artistic and historical interests of the community at large.
(E) In historic communities, the building and zoning regulations should prohibit construction that obstructs access to historic sites.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): This directly says that property rights can be overridden by the community's artistic and historical interests — exactly what the residents are arguing.
- Wrong (A): There's no historic building in question. They're talking about stopping a new house from being built.
- Wrong (B): They're not trying to buy the land. They're trying to stop the house from being built.
- Wrong (C): The artist is dead. Other people are making the demand, and the principle only gives that right to the artist.
- Wrong (E): The house is fine by the zoning regulations. The residents aren't trying to change the zoning — they're trying to stop the house despite it.

SUMMARY:
Some famous painter painted a field. The landowners want to build a big house on it. Nearby residents want to stop them, because the house would damage the community's artistic heritage.

ANTICIPATION:
The residents are trying to stop the house from being built on property they don't own. Expect the answer to say that preserving the area's artistic heritage is a good enough reason to override someone's property rights.`,

    `QUESTION B23
Type: Apply the Principle
Difficulty: Hard
Domain: Philosophy and ethics

Problem: If Shayna congratulates Daniel on his award, she will misrepresent her true feelings. However, if Shayna does not congratulate Daniel, she will hurt his feelings.

Principle: One should never be insincere about one's feelings, except possibly where one believes that the person with whom one is speaking would prefer kindness to honesty.

The principle, if valid, most helps to justify the reasoning in which one of the following arguments concerning the problem?

(A) If Shayna congratulates Daniel, she will avoid hurting his feelings, so she should congratulate him.
(B) Daniel might prefer for Shayna to congratulate him — even if insincerely — rather than for her to express her true feelings, and so Shayna would be doing nothing wrong in insincerely congratulating Daniel.
(C) Shayna believes that kindness should be preferred to dishonesty when speaking to others, so she should not tell Daniel her true feelings.
(D) Daniel's feelings would be hurt if he knew that congratulations from Shayna were insincere, so Shayna should not congratulate him.
(E) Shayna has no opinion about whether Daniel would prefer kindness to honesty, so she should not congratulate him.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): Without knowing whether Daniel prefers kindness to honesty, the exception doesn't apply. So the default rule holds: Shayna should not be insincere. She should not congratulate him.
- Wrong (A): The principle doesn't identify any circumstances in which we can conclude Shayna should hide her true feelings and congratulate Daniel.
- Wrong (B): The principle only says there's a possible exception — that sometimes it might be okay to misrepresent your feelings. There's no way to conclude Shayna would be doing nothing wrong at all.
- Wrong (C): The possible exception is about what Daniel feels, not what Shayna feels. Unless we know Daniel prefers kindness to honesty, Shayna should tell it like it is.
- Wrong (D): Daniel might think Shayna was being sincere if she congratulated him. We need to know whether Daniel values kindness or honesty more, not what he'd feel if he found out she was insincere.

SUMMARY:
Shayna can't win. If she congratulates Daniel, she's being insincere. If she doesn't, she hurts his feelings. The principle says: be sincere, unless you think the person would prefer kindness over honesty.

ANTICIPATION:
Insincerity is allowed only as a possible exception when you believe the person prefers kindness to honesty. If Shayna doesn't know or believe that Daniel prefers kindness, the exception doesn't apply and the default rule kicks in — she should not be insincere. Expect the answer to say Shayna doesn't know Daniel's preference.`
  ],

  "Strengthener": [
    `QUESTION 6
Type: Strengthener
Difficulty: Easy
Domain: Philosophy and ethics

Critic: The criticism of the popular film comedy Quirks for not being realistic is misguided. It is certainly true that the characters are too stylized to be real people. That could be problematic, but in this case the resulting film is funny. And that is the important thing for a comedy.

Which one of the following principles, if valid, most helps to justify the reasoning in the critic's argument?

(A) Films should be judged on how well they accurately capture the world.
(B) Films are successful as long as they are popular.
(C) Film comedies should find their humor in their stylistic portrayals.
(D) Films are successful if they succeed within their genre.
(E) Films should try to stay entirely within a single genre.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): If films succeed by achieving the goals of their genre, and a comedy's goal is to be funny, and Quirks is funny, then the criticism about realism is misguided. This principle validates the critic's reasoning exactly.
- Wrong (A): This says realism matters, which is the opposite of what the critic argues.
- Wrong (B): Popularity is never mentioned in the argument. The critic's point is about funniness, not box office success.
- Wrong (C): The critic values the humor but never specifies where that humor should come from.
- Wrong (E): The argument never concerns mixing genres.

SUMMARY:
Critics called Quirks unrealistic. This critic fires back: it is a comedy, it is funny, and that is what matters. The criticism about realism misses the point of the genre.

ANTICIPATION:
The critic thinks humor is what counts for a comedy. Why? Because it is a comedy — and comedies are supposed to be funny. The supporting principle should say that a film succeeds when it achieves the goal of its genre.`,

    `QUESTION 22
Type: Strengthener
Difficulty: Hard
Domain: Biology / medicine

Because the native salmon in Lake Clearwater had nearly disappeared, sockeye salmon were introduced in 1940. After being introduced, this genetically uniform group of sockeyes split into two distinct populations that do not interbreed, one inhabiting deep areas of the lake and the other inhabiting shallow areas. Since the two populations now differ genetically, some researchers hypothesize that each has adapted genetically to its distinct habitat.

Which of the following, if true, most strongly supports the researchers' hypothesis?

(A) Neither of the two populations of sockeyes has interbred with the native salmon.
(B) When the native salmon in Lake Clearwater were numerous, they comprised two distinct populations that did not interbreed.
(C) Most types of salmon that inhabit lakes spend part of the time in shallow water and part in deeper water.
(D) One of the populations of sockeyes is virtually identical genetically to the sockeyes originally introduced in 1940.
(E) The total number of sockeye salmon in the lake is not as large as the number of native salmon had been many years ago.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): If either population had interbred with native salmon, that interbreeding could explain the genetic differences — providing an alternative to the adaptation hypothesis. Ruling out interbreeding eliminates this competing explanation and strengthens the case that habitat adaptation caused the genetic divergence.
- Wrong (B): What the native salmon did tells us nothing about whether the sockeyes adapted to their habitats.
- Wrong (C): General salmon behavior is irrelevant to whether these specific populations adapted genetically.
- Wrong (D): If one population is genetically identical to the original introduction, it suggests that population did not adapt, which weakens rather than strengthens the hypothesis.
- Wrong (E): Total population numbers are irrelevant to the cause of genetic differences.

SUMMARY:
Sockeyes introduced into a lake split into two populations living in different depths. The two populations are now genetically distinct. Researchers think each adapted to its habitat. We need to strengthen that hypothesis.

ANTICIPATION:
The hypothesis says habitat adaptation caused the genetic differences. The main alternative explanation would be interbreeding with other genetically distinct fish. An answer that rules out such alternatives would strengthen the hypothesis by eliminating competing explanations.`,

    `QUESTION B20
Type: Strengthener
Difficulty: Hard
Domain: Biology / medicine

In a recent study of stroke patients, those who exhibited continuing deterioration of the nerve cells in the brain after the stroke also exhibited the highest levels of the protein glutamate in their blood. Glutamate, which functions within nerve cells as a neurotransmitter, can kill surrounding nerve cells if it leaks from damaged or oxygen-starved nerve cells. Thus glutamate leaking from damaged or oxygen-starved nerve cells is a cause of long-term brain damage resulting from strokes.

Which one of the following, if true, most strengthens the argument?

(A) Any neurotransmitter that leaks from a damaged or oxygen-starved nerve cell will damage surrounding nerve cells.
(B) Stroke patients exhibit a wide variety of abnormal chemical levels in their blood.
(C) Glutamate is the only neurotransmitter that leaks from oxygen-starved or physically damaged nerve cells.
(D) Leakage from damaged or oxygen-starved nerve cells is the only possible source of glutamate in the blood.
(E) Nerve cells can suffer enough damage to leak glutamate without being destroyed themselves.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): The stroke patients with lots of nerve cell deterioration had lots of glutamate in the blood. This answer tells us the extra glutamate could only come from nerve cell leakage. Since we know such leakage can damage other nerve cells, this rules out alternate sources of glutamate and strengthens the causal conclusion.
- Wrong (A): The conclusion isn't about just any neurotransmitter — it's specifically about glutamate. Knowing other things could be responsible doesn't strengthen the case for glutamate.
- Wrong (B): Stroke patients are generally chemically messed up. We already know glutamate correlates with nerve cell deterioration. This doesn't help establish causation.
- Wrong (C): Even if glutamate is the only leaking neurotransmitter, something other than a neurotransmitter might be responsible for the nerve cell damage.
- Wrong (E): Whether the leaking cells survive doesn't matter. We know the leakage can kill neighboring cells either way.

SUMMARY:
In stroke patients, those with the most continuing nerve cell deterioration also had the most glutamate in their blood. Glutamate can leak from damaged nerve cells and kill surrounding cells. So that leakage must be causing the long-term brain damage.

ANTICIPATION:
This argument jumps from a correlation to a causal conclusion. How do we know the glutamate isn't coming from somewhere other than leaking nerve cells? Or that something else is responsible for both the high glutamate and the nerve cell deterioration? Expect the answer to rule out an alternate source of the glutamate.`
  ],

  "Parallel Structure": [
    `QUESTION 7
Type: Parallel Structure
Difficulty: Easy
Domain: Political science

Party X has recently been accused by its opposition, Party Y, of accepting international campaign contributions, which is illegal. Such accusations are, however, ill founded. Three years ago, Party Y itself was involved in a scandal in which it was discovered that its national committee seriously violated campaign laws.

Which one of the following contains flawed reasoning most similar to the flawed reasoning in the argument above?

(A) The plaintiff accuses the defendant of violating campaign laws, but the accusations are ill founded. While the defendant's actions may violate certain laws, they are not immoral, because the laws in question are unjust.
(B) The plaintiff accuses the defendant of violating campaign laws, but these accusations show the plaintiff to be hypocritical, because the plaintiff has engaged in similar conduct.
(C) The plaintiff accuses the defendant of violating campaign laws, and, in the past, courts have declared such violations illegal. Nevertheless, the plaintiff recently engaged in actions that were similar to those of the defendant, the plaintiff's accusations are ill founded.
(D) The plaintiff accuses the defendant of violating campaign laws, but these accusations are ill founded. They are clearly an attempt to stir up controversy, because they were made just two weeks before the election.
(E) The plaintiff accuses the defendant of voting only for campaign laws that would favor the defendant's party. This accusation is ill founded, however, because it attacks the defendant's motivations instead of addressing the arguments the defendant has put forth justifying these votes.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): Party X is accused → Party Y previously did something similar → therefore the accusations are ill founded. Answer C has the same structure: the defendant is accused → the plaintiff did something similar → therefore the accusations are ill founded. The logical form is identical.
- Wrong (A): The argument dismisses the accusations by attacking the laws as unjust, not by pointing to the accuser's prior conduct.
- Wrong (B): This reaches the conclusion that the plaintiff is hypocritical — not that the accusations are ill founded.
- Wrong (D): This dismisses accusations based on timing, not based on the accuser's prior misconduct.
- Wrong (E): This describes an ad hominem fallacy in general terms rather than committing one.

SUMMARY:
Party Y accuses Party X of illegal campaign contributions. But Party Y was caught violating campaign laws three years ago. So the accusations must be ill founded. The flaw: the accuser's past misconduct does not make the current accusations false.

ANTICIPATION:
The flaw is an ad hominem — dismissing a valid accusation because the accuser has done something similar. The correct answer must have: an accusation, evidence that the accuser did something similar, and the conclusion that the accusation is therefore ill founded.`,

    `QUESTION 17
Type: Parallel Structure
Difficulty: Hard
Domain: Law-adjacent topics

If Suarez is not the most qualified of the candidates for sheriff, then Anderson is. Thus, if the most qualified candidate is elected and Suarez is not elected, then Anderson will be.

The reasoning in which one of the following is most similar to the reasoning in the argument above?

(A) If the excavation contract does not go to the lowest bidder, then it will go to Caldwell. So if Qiu gets the contract and Caldwell does not, then the contract will have been awarded to the lowest bidder.
(B) If the lowest bidder on the sanitation contract is not Dillon, then it is Ramsey. So if the contract goes to the lowest bidder and it does not go to Dillon, then it will go to Ramsey.
(C) If Kapshaw is not awarded the landscaping contract, then Johnson will be. So if the contract goes to the lowest bidder and it does not go to Johnson, then it will go to Kapshaw.
(D) If Holihan did not submit the lowest bid on the maintenance contract, then neither did Easton. So if the contract goes to the lowest bidder and it does not go to Easton, then it will not go to Holihan either.
(E) If Perez is not the lowest bidder on the catering contract, then Sullivan is. So if Sullivan does not get the contract and Perez does not get it either, then it will not be awarded to the lowest bidder.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): If not Dillon, then Ramsey is the lowest bidder. So if the contract goes to the lowest bidder and not Dillon, it goes to Ramsey. This matches the stimulus exactly: one of two people holds a property; if it goes to the one with that property but not the first person, it goes to the second.
- Wrong (A): This uses the contrapositive structure rather than the original conditional, producing a different logical form.
- Wrong (C): The premise does not establish that Kapshaw or Johnson is the lowest bidder — it only says if not one, then the other gets the contract regardless of bidding.
- Wrong (D): The premise says if Holihan is not the lowest bidder, neither is Easton — a different logical structure entirely.
- Wrong (E): The premise matches, but the conclusion says the contract will NOT go to the lowest bidder, which is the opposite direction from the stimulus.

SUMMARY:
One of two people is most qualified for sheriff. If the most qualified one wins and it is not the first person, it must be the second. We need an answer with the same logical skeleton.

ANTICIPATION:
The structure is: if not A, then B has property X. Therefore if X wins and not A, then B. The answer must preserve this exact form — one of two people holds a property, and the conclusion correctly identifies which one wins when the property-holder wins but it is not the first candidate.`,

    `QUESTION B18
Type: Parallel Structure
Difficulty: Hard
Domain: Environmental science / ecology

So far this summer there has been no rain in the valley. But usually a few inches of rain fall there each summer. Since only one week of summer is left, it will probably rain in the valley within the next week.

The flawed pattern of reasoning in the argument above is most similar to that in which one of the following arguments?

(A) Aisha has finished proofreading all but the last two pages of an issue of the journal Periodos and has encountered no errors. However, there are sometimes a few errors in an issue of Periodos. So there may be errors in the pages that Aisha has not yet checked.
(B) There are generally few errors in an issue of Periodos. Aisha has finished proofreading all but the last two pages and has encountered no errors. Hence, there are probably no errors in the pages she has not yet checked.
(C) On average, there are a few errors in an issue of Periodos. Aisha has finished proofreading all but the last two pages of an issue but has encountered no errors. So there are probably errors in the pages she has not yet checked.
(D) Aisha has proofread several issues of Periodos and has encountered no errors. But there are seldom any errors in an issue. So there will probably be no errors in the next issue she proofreads.
(E) There usually are errors in each issue of Periodos. Since Aisha has finished proofreading the latest issue and has detected no errors, Aisha has probably made a mistake in her proofreading.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): This is the answer. There are usually errors, but Aisha hasn't found any yet. So there will probably be errors in the remaining pages. Same flaw and structure as the stimulus — because something normally happens in a given period and hasn't yet, it'll happen in the remaining time.
- Wrong (A): This is a valid argument. If there are sometimes errors, there's certainly at least a chance that there'll be some in the remaining pages.
- Wrong (B): This flips it. The stimulus says since there hasn't been rain yet, there will be. This answer says since there haven't been errors yet, there won't be any.
- Wrong (D): If there are seldom any errors, there probably won't be errors in the next issue regardless of Aisha's past experience. That's valid.
- Wrong (E): Aisha has finished the whole journal. There's no remaining portion. The flaw in E is different — it blames Aisha rather than predicting future events.

SUMMARY:
It usually rains a few inches in the valley each summer. It hasn't rained yet this summer and there's only a week left. So it'll probably rain this week.

ANTICIPATION:
The argument assumes that because something normally happens within a given period, and hasn't happened through most of that period, it'll probably happen in the remaining time. Look for an answer with the same structure: normally X happens, hasn't happened yet, time is running out, so X will probably happen now.`
  ],

  "Weakener": [
    `QUESTION 9
Type: Weakener
Difficulty: Easy
Domain: Economics and public policy

Columnist: Research shows significant reductions in the number of people smoking, and especially in the number of first-time smokers in those countries that have imposed stringent restrictions on tobacco advertising. This provides substantial grounds for disputing tobacco companies' claims that advertising has no significant causal impact on the tendency to smoke.

Which one of the following, if true, most undermines the columnist's reasoning?

(A) People who smoke are unlikely to quit merely because they are no longer exposed to tobacco advertising.
(B) Broadcast media tend to have stricter restrictions on tobacco advertising than do print media.
(C) Restrictions on tobacco advertising are imposed only in countries where a negative attitude toward tobacco use is already widespread and increasing.
(D) Most people who begin smoking during adolescence continue to smoke throughout their lives.
(E) People who are largely unaffected by tobacco advertising tend to be unaffected by other kinds of advertising as well.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): If restrictions are only imposed in countries where anti-tobacco attitudes are already growing, then the decline in smoking could be caused by those attitudes — not by the advertising restrictions. This provides an alternative explanation that breaks the causal link between restrictions and reduced smoking.
- Wrong (A): Even if restrictions do not help current smokers quit, they might still reduce the number of new smokers, which the columnist also mentions.
- Wrong (B): Where restrictions are strictest within a country is irrelevant to whether restrictions across countries are responsible for the decline.
- Wrong (D): Persistence of smoking among adolescents who start does not address whether advertising restrictions reduce the number who start.
- Wrong (E): How people respond to other kinds of advertising is irrelevant to the causal claim about tobacco advertising specifically.

SUMMARY:
Countries with strict tobacco advertising restrictions have seen fewer smokers and fewer new smokers. The columnist concludes that tobacco advertising does cause people to smoke, contradicting tobacco companies' denials.

ANTICIPATION:
The columnist argues that restrictions caused the decline. But correlation is not causation. Maybe countries with fewer smokers are the ones most likely to impose restrictions in the first place — meaning the pre-existing anti-tobacco culture, not the restrictions, caused the decline. Look for an answer that identifies an alternative cause.`,

    `QUESTION 19
Type: Weakener
Difficulty: Hard
Domain: History and social science

A carved flint object depicting a stylized human head with an open mouth was found in a Stone Age tomb in Ireland. Some archaeologists believe that the object was a weapon — the head of a warrior's mace — but it is too small for that purpose. Because of its size and the fact that an open mouth symbolizes speaking, the object was probably the head of a speaking staff, a communal object passed around a small assembly to indicate who has the right to speak.

Which one of the following, if true, would most weaken the argument?

(A) The tomb in which the object was found did not contain any other objects that might have been weapons.
(B) Communal objects were normally passed from one generation to the next in Stone Age Ireland.
(C) The object was carved with an artistry that was rare in Stone Age Ireland.
(D) The tomb in which the object was found was that of a politically prominent person.
(E) A speaking staff with a stone head is thought to symbolize a warrior's mace.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): The argument identifies the object as a communal speaking staff found in a tomb. If communal objects were normally passed down through generations rather than buried with individuals, a communal object would be unlikely to end up in a single person's tomb — weakening the conclusion that this is a speaking staff.
- Wrong (A): The absence of other weapons in the tomb does not tell us what this specific object was.
- Wrong (C): The artistry of the object does not indicate its function.
- Wrong (D): Finding the object in an important person's tomb does not clarify whether it was a weapon, a speaking staff, or something else.
- Wrong (E): Even if speaking staffs symbolize warrior maces, that does not make this object a weapon. If anything, it supports the speaking staff interpretation.

SUMMARY:
A small carved head with an open mouth was found in a Stone Age tomb. It is too small to be a weapon. Since open mouths symbolize speaking, it was probably a speaking staff — a communal object indicating who may speak in an assembly.

ANTICIPATION:
The argument concludes this was a communal speaking staff. Communal objects and tombs make an odd combination. If communal objects were normally passed down through generations, not buried with anyone, then finding one in a tomb is strange — which would undermine the speaking staff identification.`,

    `QUESTION B1
Type: Weakener
Difficulty: Easy
Domain: Biology / medicine

In an experiment, ten people were asked to taste samples of coffee and rank them. Five of the people were given chocolate with the coffee, and this group subsequently reported that all the coffee samples tasted pretty much the same as one another. Five others tasted coffee only, and they were able to detect differences. Clearly, then, chocolate interferes with one's ability to taste coffee.

Which one of the following, if true, most undermines the conclusion drawn above?

(A) The ten people were randomly assigned to either group, although some people had asked to be in the group that received chocolate.
(B) Similar results were achieved when the experiment was repeated with a different, larger group of people.
(C) Chocolate is normally consumed as a solid, whereas coffee is normally consumed as a liquid.
(D) The five people who were originally given chocolate were asked a week later to taste coffee samples without chocolate, and they still detected no differences between the coffee samples.
(E) Some subjects who tasted just coffee reported only subtle differences between the coffee samples, while others thought the differences were considerable.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): This is the answer. They couldn't tell the difference between coffees, even when they hadn't eaten chocolate. Must be that they can't taste coffee for some other reason. This shows the effect without the cause.
- Wrong (A): Random assignment actually strengthens the argument. It means it's less likely there was some other difference between the groups.
- Wrong (B): Replicating results in a bigger study strengthens the argument; it doesn't address causation.
- Wrong (C): Solid versus liquid is irrelevant. The point is that the chocolate-eaters couldn't taste coffee differences.
- Wrong (E): Whether the differences were subtle or large, the coffee-only group still detected differences. That's the whole point.

SUMMARY:
Some people got coffee and chocolate, others just coffee. The ones who just got coffee could tell different coffees apart, whereas the chocolate group thought they all tasted the same. The conclusion is that chocolate messes up your ability to taste coffee.

ANTICIPATION:
The argument claims chocolate caused the inability to taste differences. But what if those people just couldn't taste anything to begin with? Expect the answer to undermine the causal link between chocolate and the tasting failure.`,

    `QUESTION B17
Type: Weakener
Difficulty: Hard
Domain: Environmental science / ecology

A positive correlation has been found between the amount of soot in the atmosphere of cities and the frequency of a certain ailment among those cities' populations. However, the soot itself probably does not cause this ailment, since in cities where there are large amounts of soot in the air, there are usually also high concentrations of many other air pollutants.

Which one of the following statements, if true, most weakens the argument?

(A) In cities where there are high concentrations of many air pollutants but little if any soot in the air, the frequency of the ailment is just as high, on average, as it is in cities where there are large amounts of soot in the air.
(B) If the ailment rarely occurs except in cities in which there are large amounts of soot in the air, then the soot is probably the cause of the ailment.
(C) In each of the cities where there are large amounts of soot in the air but little other air pollution, the frequency of the ailment is at least as high as it is anywhere else.
(D) If high concentrations of many different pollutants in a city's air are correlated with a high frequency of the ailment among that city's population, then it is possible that two or more of those pollutants each causally contributes to the ailment.
(E) In cities in which there are high concentrations of many air pollutants, there are generally also high concentrations of other forms of pollution that are very likely to contribute causally to the ailment.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): This is the one. Where there's soot but not the other air pollution, people get the disease anyway. This gives us the effect without the purported cause — not looking good for the argument's claim that other pollutants are responsible.
- Wrong (A): This strengthens the argument. It makes it look more likely that the other pollutants, not the soot, cause the disease.
- Wrong (B): We know the disease correlates with soot, but we don't know that it rarely occurs except where there's tons of soot.
- Wrong (D): This doesn't tell us anything unless we know whether soot is one of the contributing pollutants.
- Wrong (E): This strengthens the argument by identifying yet more factors other than soot that contribute to the ailment.

SUMMARY:
In cities with lots of soot in the air, lots of people get some particular disease. But the author thinks the soot probably doesn't cause it, because where there's soot there's also generally lots of other air pollution. Must be those other pollutants.

ANTICIPATION:
The disease correlates with soot, but soot also correlates with other air pollution. Expect the answer to separate them — show that when there's soot but not the other pollution, people still get the disease. That's the effect without the alternative cause.`
  ],

  "Sufficient Assumption": [
    `QUESTION 10
Type: Sufficient Assumption
Difficulty: Easy
Domain: Philosophy and ethics

Actor: Bertolt Brecht's plays are not genuinely successful dramas. The roles in Brecht's plays express such incongruous motives and beliefs that audiences, as well as the actors playing the roles, invariably find it difficult, at best, to discern any of the characters' personalities. But, for a play to succeed as a drama, audiences must care what happens to at least some of its characters.

The conclusion of the actor's argument can be properly drawn if which one of the following is assumed?

(A) An audience that cannot readily discern a character's personality will not take any interest in that character.
(B) A character's personality is determined primarily by the motives and beliefs of that character.
(C) The extent to which a play succeeds as a drama is directly proportional to the extent to which the play's audiences care about its characters.
(D) If the personalities of a play's characters are not readily discernible by the actors playing the roles, then those personalities are not readily discernible by the play's audience.
(E) All plays that, unlike Brecht's plays, have characters with whom audiences empathize succeed as dramas.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): We know audiences cannot discern Brecht's characters' personalities. We know audiences must care about characters for a play to succeed. The missing link is: if you cannot discern a personality, you do not care about the character. Answer A provides exactly this bridge, making the conclusion logically airtight.
- Wrong (B): What determines personality is irrelevant. The argument is about whether audiences can discern personalities, not about what constitutes a personality.
- Wrong (C): A proportional relationship between caring and success is already implied by the premise. This does not bridge the gap between discerning personalities and caring.
- Wrong (D): We already know both actors and audiences cannot discern the personalities. Whether these facts are generally linked does not fill the logical gap.
- Wrong (E): This talks about other plays, which are outside the scope of the argument about Brecht.

SUMMARY:
Brecht's characters have confusing, incongruous personalities. Audiences and actors alike cannot figure out who these characters are. A play succeeds as drama only if audiences care about the characters. Therefore Brecht's plays are not successful dramas.

ANTICIPATION:
Diagram the argument: Brecht → can't discern personalities. Successful drama → audiences care. We need a link: can't discern personality → don't care about character. That is exactly what the correct answer will provide.`,

    `QUESTION 12
Type: Sufficient Assumption
Difficulty: Medium
Domain: Law-adjacent topics

The chairperson should not have released the Election Commission's report to the public, for the chairperson did not consult any other members of the commission about releasing the report before having it released.

The argument's conclusion can be properly inferred if which one of the following is assumed?

(A) It would have been permissible for the chairperson to release the commission's report to the public only if most other members of the commission had first given their consent.
(B) All of the members of the commission had signed the report prior to its release.
(C) The chairperson would not have been justified in releasing the commission's report if any members of the commission had serious reservations about the report's content.
(D) The chairperson would have been justified in releasing the report only if each of the commission's members would have agreed to its being released had they been consulted.
(E) Some members of the commission would have preferred that the report not be released to the public.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): This establishes that release was permissible only if most members consented first. Since no one was even consulted, consent was impossible. Therefore release was not permissible — which is exactly the conclusion.
- Wrong (B): Whether members signed the report is irrelevant. The issue is consultation about releasing it, not approval of its content.
- Wrong (C): Whether members had reservations about the content is irrelevant. The argument concerns consultation about the decision to release, not the report's substance.
- Wrong (D): This raises a hypothetical about what members would have said if consulted, which is unnecessary. The argument only needs to establish that failing to consult was itself wrong.
- Wrong (E): What some members would have preferred tells us nothing about whether the chairperson was obligated to consult them.

SUMMARY:
The chairperson released the report without consulting anyone. That was wrong. The argument needs an assumption that makes failing to consult sufficient reason to conclude the release was impermissible.

ANTICIPATION:
The premise is: no consultation occurred. The conclusion is: the chairperson should not have released the report. The assumption must connect these by saying consultation was required. Look for an answer that says the release was only permissible if others were consulted or gave consent.`,

    `QUESTION B24
Type: Sufficient Assumption
Difficulty: Hard
Domain: Political science

Clearly, a democracy cannot thrive without effective news media. After all, a democracy cannot thrive without an electorate that is knowledgeable about important political issues, and an electorate can be knowledgeable in this way only if it has access to unbiased information about the government.

The argument's conclusion is properly inferred if which one of the following is assumed?

(A) All societies that have effective news media are thriving democracies.
(B) If an electorate has access to unbiased information about the government, then that electorate will be knowledgeable about important political issues.
(C) A democracy will thrive if its electorate is knowledgeable about important political issues.
(D) A democracy cannot thrive if the electorate is exposed to biased information about the government.
(E) Without effective news media, an electorate will not have access to unbiased information about the government.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): Exactly what we expected. Take the contrapositive of the second premise: if there's no access to unbiased information, the electorate isn't knowledgeable. Combined with the first premise: if not knowledgeable, democracy doesn't thrive. Add E: no effective news media means no access to unbiased information. Chain them together: no news media → no unbiased info → not knowledgeable → democracy doesn't thrive.
- Wrong (A): This is the inverse of the conclusion. That doesn't help us infer the conclusion.
- Wrong (B): This is the converse of one of the premises. It doesn't tell us anything about the role of the news media.
- Wrong (C): This is the inverse of one of the premises. The conclusion talks about the news media — any sufficient assumption must mention the news media.
- Wrong (D): The argument claims access to unbiased information is necessary. It doesn't matter if there's also biased information floating around. This answer also doesn't mention the news media.

SUMMARY:
Diagram it out. If the electorate isn't knowledgeable, democracy won't thrive. If the electorate is to be knowledgeable, it needs access to unbiased information. The conclusion: without effective news media, a democracy won't thrive. We need to connect "no news media" to "no unbiased information."

ANTICIPATION:
Take the contrapositive of the second premise: if there's no unbiased information access, the electorate isn't knowledgeable. That combines with the first premise transitively. To complete the chain to the conclusion, we need: no effective news media → no access to unbiased information. That's exactly what the correct answer says.`
  ],

  "Structural Analysis": [
    `QUESTION 11
Type: Structural Analysis
Difficulty: Easy
Domain: Political science

Municipal legislator: The mayor proposes that the city accept a lighting company's gift of several high-tech streetlights. Surely there would be no problem in accepting these despite some people's fear that the company wants to influence the city's decision regarding park lighting contracts. The only ulterior motive I can find is the company's desire to have its products seen by mayors who will visit the city for an upcoming convention. In any case, favoritism in city contracts is prevented by our competitive-bidding procedure.

Which one of the following most accurately expresses the main conclusion of the municipal legislator's argument?

(A) Some people's fear that the company wants to influence the city's decision regarding park lighting contracts is unfounded.
(B) The mayor's proposal to accept the gift of streetlights should not be considered problematic.
(C) It is not appropriate that any company should have the unique opportunity to display its products to mayors attending the upcoming convention.
(D) The city's competitive-bidding procedure prevents favoritism in the dispensing of city contracts.
(E) The lighting company's desire to display its products to visiting mayors is the real motivation behind the suggested gift of streetlights.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): The entire argument — identifying the company's motive, noting the competitive-bidding safeguard — is offered to support this one point: it is fine to accept the gift. This is what the legislator is trying to convince us of.
- Wrong (A): The legislator does not say the fears are completely unfounded — only that they do not change the conclusion. This is too narrow and misdescribes the argument's purpose.
- Wrong (C): This contradicts the legislator's view. The legislator thinks the company showing off its products is perfectly fine.
- Wrong (D): This is a premise — a reason the gift is acceptable — not the main conclusion.
- Wrong (E): This is also a premise — what the legislator believes the company's motive is — used to support the conclusion that acceptance is acceptable.

SUMMARY:
A company wants to give the city free streetlights. Some people worry it is a bribe for future contracts. The legislator says the motive is just product publicity, and the city's bidding rules prevent favoritism anyway. So accepting the gift is fine.

ANTICIPATION:
There are no strong conclusion indicators here, so ask: what is the legislator trying to persuade us of? Everything else — the motive, the bidding procedure — is support. The main point is that accepting the gift is not a problem.`,

    `QUESTION 16
Type: Structural Analysis
Difficulty: Hard
Domain: Philosophy and ethics

The top prize in architecture, the Pritzker Prize, is awarded for individual achievement, like Nobel Prizes for science. But architects are judged by their buildings, and buildings are the result of teamwork. As achievements, buildings are not like scientific discoveries, but like movies, which compete for awards for best picture. Thus, it would be better if the top prize in architecture were awarded to the best building rather than the best architect.

The argument proceeds by

(A) reaching a conclusion about the way something should be done in one field on the basis of comparisons with corresponding practices in other fields.
(B) making a distinction between two different types of objects in order to conclude that one has more inherent value than the other.
(C) pointing to similarities between two practices as a basis for concluding that criticisms of one practice can rightly be applied to the other.
(D) arguing that because two different fields are disanalogous, the characteristics of one field are not relevant to justifying a conclusion about the other.
(E) contending that an action is inappropriate by presenting an argument that a corresponding action in an analogous case is inappropriate.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): The argument compares architecture to movies (buildings are like films — team achievements) and contrasts it with science (buildings are not like discoveries). Using these comparisons across fields, it concludes that the prize structure should change. This is exactly reaching a conclusion in one field based on comparisons with other fields.
- Wrong (B): The argument never claims one type of achievement has more inherent value than another.
- Wrong (C): The argument does not say that criticisms of movie award practices apply to architecture award practices. It draws a positive analogy, not a critical one.
- Wrong (D): The argument does say science and architecture are disanalogous, but it then uses the movie analogy positively — not to say another field's characteristics are irrelevant.
- Wrong (E): The argument does not contend that any action is inappropriate — it advocates for a change based on a positive analogy.

SUMMARY:
The Pritzker Prize rewards individual architects, like Nobel Prizes reward scientists. But buildings are team efforts, like movies. Since movies get best-picture awards rather than best-director awards, architecture prizes should reward buildings, not architects.

ANTICIPATION:
This argument makes its case through analogy — specifically by saying buildings are like movies (not like scientific discoveries). The correct answer will describe that analogical reasoning across fields.`,

    `QUESTION B4
Type: Structural Analysis
Difficulty: Easy
Domain: Psychology and behavior

Psychologist: Some have argued that Freudian psychotherapy is the most effective kind because it is so difficult and time consuming. But surely this does not follow. Similar reasoning — e.g., concluding that a car-repair chain has the most effective technique for repairing cars because the cars it services receive so much work and spend so much time in the shop — would never be accepted.

The reasoning technique employed by the psychologist is that of attempting to undermine an argument by

(A) introducing a principle that contradicts the one on which the argument is based.
(B) questioning the truth of its premises.
(C) presenting an analogous argument whose conclusion is thought to be obviously false.
(D) claiming that the argument is based on a false analogy.
(E) suggesting that a supposed cause of a phenomenon is actually an effect of that phenomenon.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): The whole thing about car repair is an analogy. The psychologist presents a parallel argument — same structure, obviously absurd conclusion — to show the original reasoning is flawed.
- Wrong (A): The author doesn't mention any principle or general rule.
- Wrong (B): The author doesn't deny that Freudian psychotherapy really is difficult and time-consuming. Those are the opposing argument's premises, and they're accepted.
- Wrong (D): The author is the one providing an analogy. The argument being attacked doesn't contain any analogy.
- Wrong (E): There's no cause and effect relationship being discussed here.

SUMMARY:
Some people think Freudian therapy is the best because it takes a long time. But if you took the same logic to car repair — the shop that takes the longest must be the best — you'd reject it immediately. So the reasoning about Freudian therapy is no good.

ANTICIPATION:
Car repair is an analogy. The author uses that analogy to challenge the reasoning in the argument that Freudian psychotherapy is so good because it's time-consuming.`,

    `QUESTION B5
Type: Structural Analysis
Difficulty: Easy
Domain: Environmental science / ecology

While biodiversity is indispensable to the survival of life on Earth, biodiversity does not require the survival of every currently existing species. For there to be life on Earth, various ecological niches must be filled; many niches, however, can be filled by more than one species.

Which one of the following statements most accurately expresses the conclusion drawn in the argument?

(A) Biodiversity does not require that all existing species continue to exist.
(B) There are various ecological niches that must be filled if there is to be life on Earth.
(C) The survival of life on Earth depends upon biodiversity.
(D) There are many ecological niches that can be filled by more than one species.
(E) The species most indispensable for biodiversity fill more than one ecological niche.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): That's the conclusion, all right. Everything else in the argument is support for this claim.
- Wrong (B): This is a premise — one of the reasons why biodiversity doesn't require every species to survive.
- Wrong (C): This is another premise — the opening claim that biodiversity is indispensable to life.
- Wrong (D): This is evidence — the reason why not every species is necessary to fill all niches.
- Wrong (E): This isn't stated or implied anywhere in the argument.

SUMMARY:
If there's going to be life on earth, species have to fulfill certain roles in the ecosystem. But some of those roles can be fulfilled by more than one species. So even though biodiversity is really important, it doesn't mean that every species has to survive.

ANTICIPATION:
The conclusion is that biodiversity doesn't require that every single species survive. We know that because the premise about filling niches is there to support that claim, not to be the main point itself.`,

    `QUESTION B9
Type: Structural Analysis
Difficulty: Medium
Domain: History and social science

Fraenger's assertion that the artist Hieronymus Bosch belonged to the Brethren of the Free Spirit, a nonmainstream religious group, is unlikely to be correct. Fraenger's hypothesis explains much of Bosch's unusual subject matter. However, there is evidence that Bosch was a member of a mainstream church, and no evidence that he was a member of the Brethren.

The statement that there is no evidence that Bosch was a member of the Brethren figures in the argument in which one of the following ways?

(A) It is a premise that, when combined with the other premises, guarantees the falsity of Fraenger's assertion.
(B) It is used to support the claim that Bosch was a member of a mainstream church.
(C) It is used to dispute Fraenger's hypothesis by questioning Fraenger's credibility.
(D) It is intended to cast doubt on Fraenger's hypothesis by questioning the sufficiency of Fraenger's evidence.
(E) It is intended to help show that Bosch's choice of subject matter remains unexplained.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): It's an attack on Fraenger, and the attack is that there's no evidence for what Fraenger says. It questions whether Fraenger's evidence is sufficient to support the hypothesis.
- Wrong (A): This is tempting, but the author never says Fraenger is guaranteed to be false. The author just thinks it's unlikely to be correct.
- Wrong (B): Bosch's mainstream church membership is a separate premise. It isn't supported by the no-evidence claim.
- Wrong (C): There's no attack on Fraenger's credibility — just on the evidence for his claim.
- Wrong (E): The author never claims there's no way to explain Bosch's subject matter. Other explanations might exist.

SUMMARY:
Fraenger thinks Bosch was in a cult. Even though that would explain some of the crazy things Bosch painted, it's probably not true. There's evidence Bosch was in a normal church, and no evidence he was in that cult.

ANTICIPATION:
The statement in question is a premise in the author's argument. It's a direct attack on Fraenger — it says there's no evidence for Fraenger's claim, which weakens the hypothesis.`,

    `QUESTION B11
Type: Structural Analysis
Difficulty: Medium
Domain: Economics and public policy

Manager: This company's supply chain will develop significant weaknesses unless we make changes to our vendor contracts now. Some will argue that this problem is so far in the future that there is no need to address it today. But that is an irresponsible approach. Just imagine if a financial planner offered the same counsel to a 30-year-old client: "Don't worry, Jane, retirement is 35 years away; you don't need to save anything now." That planner would be guilty of gross malpractice.

Which one of the following most accurately expresses the overall conclusion drawn in the manager's argument?

(A) Some people argue that the supply-chain problem is so far in the future that there is no need to address it now.
(B) It would be irresponsible to postpone changes to the vendor contracts just because the supply chain will not develop weaknesses for a long time.
(C) If no changes are made to the vendor contracts, the supply chain will eventually develop significant weaknesses.
(D) In planning to meet its future obligations, a company should follow the same practices that are appropriate for an individual who is planning for retirement.
(E) Financial planners should advise their clients to save money for retirement only if retirement is many years away.

CORRECT ANSWER: B

EXPLANATION:
- Correct (B): This is the answer — it's a perfect match to the argument's conclusion, spelling out what "that would be irresponsible" means.
- Wrong (A): This is true, but it's not the author's view. The author thinks we shouldn't wait.
- Wrong (C): This is a premise — a reason we shouldn't procrastinate, not the main point.
- Wrong (D): The analogy to financial planning is a rhetorical device, not the conclusion itself.
- Wrong (E): This answer would mean you shouldn't save if retirement is close. The financial planning bit is just an analogy anyway.

SUMMARY:
If we don't change things now, we'll have supply chain problems in the future. It'll be tempting to procrastinate since the problem is far off. But that would be irresponsible — like a financial planner telling a 30-year-old not to save for retirement.

ANTICIPATION:
The conclusion is "that would be an irresponsible approach" — that's what the analogy is there to support. Paraphrase: it would be irresponsible to procrastinate making changes to our vendor contracts. Expect the answer to say something like that.`
  ],

  "Inference": [
    `QUESTION 21
Type: Inference
Difficulty: Hard
Domain: Education

Most of the students who took Spanish 101 at the university last semester attended every class session. However, each student who received a grade lower than B minus missed at least one class session.

Which one of the following statements about the students who took Spanish 101 at the university last semester can be properly inferred from the information above?

(A) At least some of the students who received a grade of A minus or higher attended every class session.
(B) Most, if not all, of the students who missed at least one class session received a grade lower than B minus.
(C) Most of the students received a grade higher than B minus.
(D) At least one student who received a grade of B minus or higher missed one or more class sessions.
(E) More than half of the students received a grade of B minus or higher.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): Take the contrapositive of the second premise: students who attended every class session received a grade of B minus or higher. Combined with the first premise — most students attended every session — it follows that most students received B minus or higher, which means more than half.
- Wrong (A): We cannot conclude anything about A minus specifically. The argument says nothing about the top of the grade distribution.
- Wrong (B): We know low-grade students missed class, but many other students may also have missed class for other reasons. This is a converse fallacy.
- Wrong (C): This is close but wrong. The conclusion is that most got B minus or higher, not higher than B minus. Some of those students may have received exactly a B minus.
- Wrong (D): This is possible but not inferable. Maybe all students who got B minus or higher had perfect attendance.

SUMMARY:
Most students attended every class. Every student who got below a B minus missed at least one class. Diagram it: if below B minus, then missed class. Contrapositive: if attended every class, then B minus or higher. Since most attended every class, most got B minus or higher.

ANTICIPATION:
Take the contrapositive of the second premise. Then combine it with the "most" statement from the first premise. The result is a valid conclusion about more than half of the students meeting a grade threshold.`,

    `QUESTION 23
Type: Inference
Difficulty: Hard
Domain: Economics and public policy

A developing country can substantially increase its economic growth if its businesspeople are willing to invest in modern industries that have not yet been pursued there. But being the first to invest in an industry is very risky. Moreover, businesspeople have little incentive to take this risk since if the business succeeds, many other people will invest in the same industry, and the competition will cut into their profits.

The statements above, if true, most strongly support which one of the following claims?

(A) Once a developing country has at least one business in a modern industry, further investment in that industry will not contribute to the country's economic growth.
(B) In developing countries, there is greater competition within modern industries than within traditional industries.
(C) A developing country can increase its prospects for economic growth by providing added incentive for investment in modern industries that have not yet been pursued there.
(D) A developing country will not experience economic growth unless its businesspeople invest in modern industries.
(E) Investments in a modern industry in a developing country carry little risk as long as the country has at least one other business in that industry.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): Investment in new modern industries would help the country grow. The problem is that businesspeople lack incentive to invest. If the country could provide added incentive, it might overcome that barrier and generate growth. This follows directly from combining both facts in the stimulus.
- Wrong (A): Competition cuts into individual profits, but that does not mean additional businesses in an industry stop contributing to the country's overall growth.
- Wrong (B): The stimulus says nothing about competition in traditional industries, so no comparison can be drawn.
- Wrong (D): This is too strong. The stimulus says investment in modern industries can substantially increase growth, not that it is the only path to growth.
- Wrong (E): The stimulus says being first is very risky, but does not say followers face little risk. Competition could harm followers too.

SUMMARY:
Developing countries grow faster when businesspeople invest in new modern industries. But the incentive to do so is low — being first is risky, and success just invites competition that eats into profits. There is a problem and we need to infer a solution.

ANTICIPATION:
The conundrum is: investment would help, but incentives are low. What follows? Providing more incentive could bridge the gap. The answer should connect the value of investment to the need for something that encourages it.`,

    `QUESTION 25
Type: Inference
Difficulty: Hard
Domain: Philosophy and ethics

Student: Before completing my research paper, I want to find the book from which I copied a passage to quote in the paper. Without the book, I will be unable to write an accurate citation, and without an accurate citation, I will be unable to include the quotation. Hence, since the completed paper will be much better with the quotation than without, _________.

Which one of the following most logically completes the student's argument?

(A) I will have to include an inaccurate citation.
(B) I will be unable to complete my research paper.
(C) if I do not find the book, my research paper will suffer.
(D) if I do not find the book, I will include the quotation without an accurate citation.
(E) if I do not find the book, I will be unable to complete my research paper.

CORRECT ANSWER: C

EXPLANATION:
- Correct (C): Chain the premises: no book → no accurate citation → no quotation. No quotation → paper is worse. Therefore: no book → paper suffers. This is the valid conclusion.
- Wrong (A): The student would leave out the quotation, not include an inaccurate citation. Fabricating a citation is not mentioned as an option.
- Wrong (B): The paper can still be completed — it will just lack the quotation and be worse for it.
- Wrong (D): This contradicts the chain of reasoning. Without a citation, the quotation cannot be included at all.
- Wrong (E): This overstates the consequence. Not finding the book means the paper will be worse, not that it cannot be finished.

SUMMARY:
The student needs a book to cite a quotation. No book means no citation. No citation means no quotation. Without the quotation, the paper is worse. Chain these together for the conclusion.

ANTICIPATION:
Follow the chain of conditionals to its logical end: if the book is not found, the paper will be worse. The answer should state exactly this — neither more dramatically (paper cannot be finished) nor differently (using the quotation without a citation).`,

    `QUESTION B6
Type: Inference
Difficulty: Easy
Domain: Biology / medicine

Clinician: Patients with immune system disorders are usually treated with a class of drugs that, unfortunately, increase the patient's risk of developing osteoporosis, a bone-loss disease. So these patients take another drug that helps to preserve existing bone. Since a drug that enhances the growth of new bone cells has now become available, these patients should take this new drug in addition to the drug that helps to preserve existing bone.

Which one of the following would be most useful to know in order to evaluate the clinician's argument?

(A) How large is the class of drugs that increase the risk of developing osteoporosis?
(B) Why are immune system disorders treated with drugs that increase the risk of developing osteoporosis?
(C) Is the new drug more expensive than the drug that helps to preserve existing bone?
(D) How long has the drug that helps to preserve existing bone been in use?
(E) To what extent does the new drug retain its efficacy when used in combination with the other drugs?

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): This is what we need to know. If the new drug caused bad drug interactions and didn't work in combination with the other drugs, that would be bad for the argument. If it works fine with the others, the conclusion sounds like a good plan.
- Wrong (A): It doesn't matter how many drugs in that class there are. We're concerned with how to protect people's bones.
- Wrong (B): We're not concerned with why people get these drugs. We're concerned with how to protect their bones when they do.
- Wrong (C): Cost doesn't figure into the argument at all.
- Wrong (D): It doesn't matter how long they've been using the existing drug. The only relevant issue is whether adding the new drug will help.

SUMMARY:
Some drugs that people get for immune disorders have a bad side effect — they hurt the bones. So doctors also give a bone-preserving drug. There's a new drug that actually grows new bone cells, so they should take that drug too.

ANTICIPATION:
This all sounds reasonable, but there might be problems the stimulus didn't address. Maybe the drugs interact badly. Expect the answer to address whether there's some problem with taking all the drugs together.`,

    `QUESTION B8
Type: Inference
Difficulty: Medium
Domain: Environmental science / ecology

Fluoride enters a region's groundwater when rain dissolves fluoride-bearing minerals in the soil. In a recent study, researchers found that when rainfall, concentrations of fluoride-bearing minerals, and other relevant variables are held constant, fluoride concentrations in groundwater are significantly higher in areas where the groundwater also contains a high concentration of sodium.

Which one of the following can most reasonably be concluded on the basis of the researchers' findings?

(A) Fluoride-bearing minerals are not the primary source of fluoride found in groundwater.
(B) Rainfall does not affect fluoride concentrations in groundwater.
(C) Sodium-bearing minerals dissolve at a faster rate than fluoride-bearing minerals.
(D) Sodium in groundwater increases the rate at which fluoride-bearing minerals dissolve.
(E) Soil that contains high concentrations of sodium-bearing minerals also contains high concentrations of fluoride-bearing minerals.

CORRECT ANSWER: D

EXPLANATION:
- Correct (D): This is it. More sodium means more fluoride, and that fluoride comes from minerals. So sodium must help those minerals dissolve. Connect the facts.
- Wrong (A): Nothing in the stimulus indicates there are other sources of fluoride.
- Wrong (B): Rainfall was one of the variables held constant — that doesn't mean it has no effect when it varies.
- Wrong (C): We don't know anything about how sodium dissolves, or even where the sodium in the groundwater comes from.
- Wrong (E): We don't know anything about sodium-bearing minerals. Also, fluoride-bearing mineral concentrations were held constant in the study.

SUMMARY:
When rain comes, it dissolves fluoride-bearing minerals in the soil and fluoride ends up in the groundwater. When there's more sodium in the groundwater, there's more fluoride — even when other variables are held constant.

ANTICIPATION:
Connect the facts. More sodium means more fluoride, when all other factors are held constant. Fluoride comes from minerals that dissolve in the rain. So sodium must help dissolve those fluoride-bearing minerals. Expect the answer to say exactly that.`,

    `QUESTION B12
Type: Inference
Difficulty: Medium
Domain: Economics and public policy

Worldwide, more books were sold last year than in any previous year. In particular, there were more cookbooks sold. For the first time ever, most of the cookbooks sold were not intended for beginners. Indeed, more cookbooks than ever were purchased by professional cooks. However, one of the few books available on every continent is a cookbook written for beginners, entitled Problem-Free Cooking.

Which one of the following is most strongly supported by the information above?

(A) Last year there were more cookbooks sold that were not intended for beginners than in any previous year.
(B) The best-selling cookbook last year was a cookbook that was intended for beginners.
(C) Sales of cookbooks intended for beginners were lower last year than in previous years.
(D) Most of the cookbooks purchased last year that were not intended for beginners were purchased by professional cooks.
(E) Problem-Free Cooking sold more copies last year than did any cookbook written for professional cooks.

CORRECT ANSWER: A

EXPLANATION:
- Correct (A): There were more cookbooks sold than ever before. For the first time, a majority weren't for beginners. That means there were more non-beginner cookbooks sold than ever before. This is the answer.
- Wrong (B): We don't know what the best-selling cookbook was. We just know one was available everywhere.
- Wrong (C): A lower percentage of cookbooks sold were for beginners, but since total cookbook sales were the highest ever, the raw number of beginner cookbooks wasn't necessarily low.
- Wrong (D): We know professional cooks bought more cookbooks than ever. But that doesn't mean they bought a majority of the non-beginner ones.
- Wrong (E): We don't know how many copies Problem-Free Cooking sold. All we know is that it was available on all continents.

SUMMARY:
New record for books sold, and for cookbooks sold. And whereas in the past, most cookbooks sold were for beginners, last year most weren't. There was one beginner cookbook that was widely available worldwide.

ANTICIPATION:
Don't overthink the anecdote about the beginner cookbook at the end. Focus on the big facts. More cookbooks sold last year, and for the first time a majority weren't for beginners. That means there were more non-beginner cookbooks sold than ever. That's a pretty likely answer.`,

    `QUESTION B16
Type: Inference
Difficulty: Hard
Domain: Biology / medicine

Stress is a common cause of high blood pressure. By calming their minds and thereby reducing stress, some people can lower their blood pressure. And most people can calm their minds, in turn, by engaging in exercise.

Which one of the following is most strongly supported by the information above?

(A) For at least some people, having lower blood pressure has at least some tendency to cause their stress levels to be reduced.
(B) Most people with high blood pressure can lower their blood pressure by reducing their stress levels.
(C) Most people who do not exercise regularly have higher stress levels as a result.
(D) Engaging in exercise can directly lower one's blood pressure.
(E) For at least some people, engaging in exercise can cause their stress levels to be reduced.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): This is the answer. Exercising clears the mind for most people, and clearing the mind reduces stress. Connect the dots and you get there.
- Wrong (A): We know that lowering stress can lower your blood pressure. We don't know whether it works the other way around.
- Wrong (B): We know it works for some people. "Most" is just too strong.
- Wrong (C): This goes way too far. Exercising might help reduce stress for some people, but that doesn't mean people who don't exercise are generally all stressed out.
- Wrong (D): From what we know, exercise might indirectly lower blood pressure by reducing stress. "Directly" is too strong.

SUMMARY:
Stress makes your blood boil — seriously, it often causes high blood pressure. Some people lower their blood pressure by calming their minds, which reduces stress. For most people, exercise calms the mind.

ANTICIPATION:
Connect the dots. Most people can calm their minds by exercising, and calming your mind reduces stress. So exercise can reduce stress for at least some people. We can't connect this all the way to blood pressure, since we only know that "some" people lower their blood pressure by reducing stress.`,

    `QUESTION B21
Type: Inference
Difficulty: Hard
Domain: Philosophy and ethics

The only songs Amanda has ever written are blues songs and punk rock songs. Most punk rock songs involve no more than three chords. So if the next song Amanda writes is not a blues song, it probably will not involve more than three chords.

The reasoning in which one of the following arguments is most similar to that in the argument above?

(A) The only pets the Gupta family has ever owned are fish and parrots. Most parrots are very noisy. So if the next pet the Gupta family owns is a parrot, it will probably be very noisy.
(B) Most parrots are very noisy. The Gupta family has never owned any pets other than fish and parrots. So if the next pet the Gupta family owns is not a parrot, it will probably not be very noisy.
(C) The Gupta family has owned only fish and parrots as pets. Most parrots are very noisy. So the next pet the Gupta family owns will probably be very noisy.
(D) The only pets the Gupta family has ever owned are fish and parrots. Most of the family's parrots have been very noisy. So if the next pet the family owns is a parrot, it will probably be very noisy.
(E) The Gupta family has never owned any pets other than fish and parrots, and most of their parrots have been very noisy. So if the next pet they own is not a fish, it will probably be very noisy.

CORRECT ANSWER: E

EXPLANATION:
- Correct (E): This matches the flaw. Amanda only writes blues or punk. Most punk has three chords or fewer. If the next one isn't blues, it's probably punk, so it probably has three chords or fewer. Answer E: the Guptas only have fish or parrots. Most of their parrots have been noisy. If the next pet isn't a fish, it's probably a parrot, so it's probably noisy.
- Wrong (A): This is valid. If the next pet is a parrot, then it'll probably be noisy. No flaw there.
- Wrong (B): If the next pet isn't a parrot, it's a fish. Fish aren't noisy. This is valid too — different structure.
- Wrong (C): We don't know that the next pet will be a parrot. This says it will "probably be very noisy" without establishing it's likely a parrot.
- Wrong (D): This is valid — if the next pet is a parrot, and most of their parrots have been noisy, it'll probably be noisy.

SUMMARY:
Amanda only writes blues or punk. Most punk has three chords max. If the next song isn't blues, it's probably punk, so it probably has three chords or fewer. The flaw: what if it's blues? We're assuming it must be punk.

ANTICIPATION:
The argument assumes that if it's not blues, it must be punk — which is valid since those are the only two types. Then it concludes that since most punk has three chords, the next non-blues song probably will too. Look for the same pattern: only two options, most of one type share a property, if it's not the other type it probably has that property.`
  ]

};

module.exports = lsatExamples;
