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
The conclusion says farmers must abandon fertilizers. But the premises only say that fertilizers caused farmers to stop using green-manure crops. Could they not just start doing both? The argument assumes they cannot — that using fertilizers means they will never plant green-manure crops. That exclusivity is the necessary assumption.`
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
Why would someone want a better concert hall but oppose building one? There must be something that makes tearing down the existing one unnecessary or undesirable — perhaps another plan already in place, or some attachment to the existing building.`
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
Showing that an argument is poorly constructed does not prove its conclusion is false. The fifteenth-century painters might or might not have had greater mastery — we simply cannot know from this argument. The critic wrongly treats a failed argument as proof the conclusion is wrong.`
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
The principle sets up a conditional: biased external consultant involved → executive probably overpaid. Look for an answer that has both elements: an external consultant who determines pay AND that consultant has business interests with the company. Watch out for the inverse — the absence of a biased consultant does not mean the executive is not overpaid.`
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
The hypothesis says habitat adaptation caused the genetic differences. The main alternative explanation would be interbreeding with other genetically distinct fish. An answer that rules out such alternatives would strengthen the hypothesis by eliminating competing explanations.`
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
The structure is: if not A, then B has property X. Therefore if X wins and not A, then B. The answer must preserve this exact form — one of two people holds a property, and the conclusion correctly identifies which one wins when the property-holder wins but it is not the first candidate.`
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
The argument concludes this was a communal speaking staff. Communal objects and tombs make an odd combination. If communal objects were normally passed down through generations, not buried with anyone, then finding one in a tomb is strange — which would undermine the speaking staff identification.`
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
The premise is: no consultation occurred. The conclusion is: the chairperson should not have released the report. The assumption must connect these by saying consultation was required. Look for an answer that says the release was only permissible if others were consulted or gave consent.`
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
This argument makes its case through analogy — specifically by saying buildings are like movies (not like scientific discoveries). The correct answer will describe that analogical reasoning across fields.`
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
Follow the chain of conditionals to its logical end: if the book is not found, the paper will be worse. The answer should state exactly this — neither more dramatically (paper cannot be finished) nor differently (using the quotation without a citation).`
  ]

};

export default lsatExamples;
