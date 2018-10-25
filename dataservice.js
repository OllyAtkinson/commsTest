/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */
     //MARKING THE CORRECT ANSWERS, SEE quizmetrics.js FOR METHODS 
    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0];
    var A = [0, 0, 4, 4, 0, 1, 4, 4, 1, 4, 0, 4, 4, 0, 4, 4, 0, 0];
    var P = [1, 1, 4, 4, 1, 0, 4, 4, 0, 4, 1, 4, 4, 1, 4, 4, 1, 1];
    var E = [4, 4, 0, 1, 4, 4, 0, 1, 4, 0, 4, 1, 0, 4, 0, 0, 4, 4];
    var I = [4, 4, 1, 1, 4, 4, 1, 0, 4, 1, 4, 0, 1, 4, 1, 1, 4, 4];

    var quizQuestions  = [
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am often direct and frank in team meetings"
                },
                {
                    answer: "I tend to be reserved in team meetings"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I take control when the team is confronted with a crisis situation"
                },
                {
                    answer: "I tend to be more reflective and to see what happens before taking actions when a crisis occurs"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My decision making is usually based on intuition and feelings that I hae or that are raised by team members"
                },
                {
                    answer: "My decision making is usually based on facts, logic and specific information that I have or that is communicaed by team members"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I tend not to express my emotions and feelings to team members"
                },
                {
                    answer: "I often express my emotions and feelings to team members"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I usually contribute information or add to discussions and team conversations"
                },
                {
                    answer: "I seldom contribute to discussions or team conversations since I prefer that they solve their own problems"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am careful and contemplative about taking risks and accepting new, difficult challenges where the team could fail"
                },
                {
                    answer: "I am quick to take risks and accept new, difficult challenges even though some may be difficult for the team to accomplish"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My facial expressions and enthusiam when conveying my views or responding to the views of others are greater than most people I know"
                },
                {
                    answer: "I tend to be less demonstrative in my facial expressions and enthusiasm when conveying my views or in responding to the views of team members"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am usually a bit difficult to get to know in interpersonal and business situations"
                },
                {
                    answer: "I feel like i am easy to get to know in both interpersonal and business situations"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I usually make decisions deliverately, more slowly and with forethought when I know my team will be affected"
                },
                {
                    answer: "I usually make decisions quickly, spontaneously and in the heat of the moment"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I am able to adapt to changing schedules and the whims of individuals around me"
                },
                {
                    answer: "I am more rigid and disciplined about how I spend my time"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I tend to use strong language and sometimes expressive gestures in communicating to team members, and I feel comfortable in stating my opinions"
                },
                {
                    answer: "I tend not to raise my voice, use a harsh tone or use dramatic gestures to express my views, feelings and opinions"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I emphasize planning and detailed information about who should do what, how it should be done and when"
                },
                {
                    answer: "I emphasize spontaneity and excitement, unplanned events that capture my attention"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My conversations with team members focus on personal experiences and other people in my life"
                },
                {
                    answer: "My conversations with team members focus on my job, professional experiences and the work of other people"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I tend to sometimes bend the rules to fit my needs and the team's needs"
                },
                {
                    answer: "I always follow policies and rules in getting things done and encourage my team members to do the same"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "My body language and facial expressions tell people right away, and with little doubt, what I am thinking and feeling"
                },
                {
                    answer: "My body language and facial expressions tend to be more reserved as to disguise my true feelings and personal thoughts from team members"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I like to be out among my team members to get things done and to elicit their ideas"
                },
                {
                    answer: "I prefer to work alone and not be encumbered by the thoughs, ideas and feelings of other team members"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "I enjoy introducing myself to new team members and am willing to talk to them about myself and personal matters"
                },
                {
                    answer: "I usually let new team members introduce themselves to me rather than approach them first and I am relecutant to get too personally inolved"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which statement do you associate closest to?",
            possibilities: [
                {
                    answer: "In expressing myself and my views to the team, I often use dramatic statements such as 'I think...', 'I feel...' and 'I believe that...'"
                },
                {
                    answer: "In expressing myself and my views to the team, I often use statements that defend and justify my beliefs such as 'According to others I have spoken to...', 'Based on previous conversations...' and 'Others have found that'..."
                },
            ],
            selected: null,
            correct: null
        }
    ];




    var turtlesData = [
        {
            type: "Extrovert",
            image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "90cm, 115kg",
            lifespan: "More than 50 years",
            diet: "Carnivore",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Introvert",
            image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "90cm, 115kg",
            lifespan: "More than 50 years",
            diet: "Carnivore",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Assertive",
            image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
            locations: "All tropical and subtropical oceans",
            size: "Up to 2m, up to 900kg",
            lifespan: "45 years",
            diet: "Carnivore",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
            type: "Passive",
            image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
            locations: "Tropical Coastal areas around the world",
            size: "Over 1m, 45-68kg",
            lifespan: "30-50 Years",
            diet: "Carnivore",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
    ];

})();
