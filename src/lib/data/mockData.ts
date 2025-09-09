import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'The Ultimate Guide To The Best WordPress LMS Plugin',
    category: 'Web Development',
    author: 'John Smith',
    duration: '2 weeks',
    students: 156,
    lessons: 20,
    quizzes: 3,
    rating: 4.8,
    reviews: 146951,
    price: 49.0,
    originalPrice: 59.0,
    description: 'Learn how to create and manage your own e-learning platform using the best WordPress LMS plugins. This comprehensive course covers everything from installation to advanced customization.',
    featured: true,
    image: '/assets/images/course1.png',
    chapters: [
      {
        id: '1-1',
        title: 'Introduction to WordPress LMS',
        lessons: [
          { id: '1-1-1', title: 'What is WordPress LMS?', duration: '15:30', type: 'video' },
          { id: '1-1-2', title: 'Benefits of Using LMS', duration: '12:45', type: 'video' },
        ]
      },
      {
        id: '1-2',
        title: 'Advanced Customization',
        lessons: [
          { id: '1-2-1', title: 'Custom Theme Development', duration: '20:15', type: 'video' },
          { id: '1-2-2', title: 'Plugin Integration', duration: '18:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Complete Python Programming Masterclass',
    category: 'Programming',
    author: 'Sarah Johnson',
    duration: '8 weeks',
    students: 2347,
    lessons: 45,
    quizzes: 8,
    rating: 4.9,
    reviews: 89234,
    price: 79.0,
    originalPrice: 99.0,
    description: 'Master Python programming from basics to advanced concepts including data science, machine learning, and web development.',
    featured: true,
    image: '/assets/images/course2.png',
    chapters: [
      {
        id: '2-1',
        title: 'Python Fundamentals',
        lessons: [
          { id: '2-1-1', title: 'Variables and Data Types', duration: '18:20', type: 'video' },
          { id: '2-1-2', title: 'Control Structures', duration: '22:10', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Digital Marketing Strategy 2024',
    category: 'Marketing',
    author: 'Mike Thompson',
    duration: '6 weeks',
    students: 1890,
    lessons: 30,
    quizzes: 5,
    rating: 4.7,
    reviews: 45678,
    price: 69.0,
    originalPrice: 89.0,
    description: 'Learn the latest digital marketing strategies including SEO, social media marketing, and email campaigns.',
    featured: false,
    image: '/assets/images/course3.png',
    chapters: [
      {
        id: '3-1',
        title: 'SEO Fundamentals',
        lessons: [
          { id: '3-1-1', title: 'Keyword Research', duration: '16:45', type: 'video' },
          { id: '3-1-2', title: 'On-Page Optimization', duration: '19:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'UX/UI Design Principles',
    category: 'Design',
    author: 'Emily Davis',
    duration: '4 weeks',
    students: 1250,
    lessons: 25,
    quizzes: 4,
    rating: 4.8,
    reviews: 34567,
    price: 59.0,
    originalPrice: 79.0,
    description: 'Master the principles of user experience and user interface design for web and mobile applications.',
    featured: true,
    image: '/assets/images/course4.png',
    chapters: [
      {
        id: '4-1',
        title: 'Design Thinking',
        lessons: [
          { id: '4-1-1', title: 'User Research Methods', duration: '14:20', type: 'video' },
          { id: '4-1-2', title: 'Wireframing Techniques', duration: '17:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Data Science with R',
    category: 'Data Science',
    author: 'Dr. Robert Chen',
    duration: '10 weeks',
    students: 987,
    lessons: 50,
    quizzes: 10,
    rating: 4.9,
    reviews: 23456,
    price: 89.0,


originalPrice: 119.0,
    description: 'Comprehensive data science course covering statistical analysis, machine learning, and data visualization using R.',
    featured: false,
    image: '/assets/images/course5.png',
    chapters: [
      {
        id: '5-1',
        title: 'R Programming Basics',
        lessons: [
          { id: '5-1-1', title: 'R Syntax and Functions', duration: '21:30', type: 'video' },
          { id: '5-1-2', title: 'Data Structures in R', duration: '19:15', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    category: 'Mobile Development',
    author: 'Alex Rodriguez',
    duration: '7 weeks',
    students: 2100,
    lessons: 35,
    quizzes: 6,
    rating: 4.8,
    reviews: 56789,
    price: 75.0,
    originalPrice: 95.0,
    description: 'Build cross-platform mobile applications using Flutter and Dart programming language.',
    featured: true,
    image: '/assets/images/course6.png',
    chapters: [
      {
        id: '6-1',
        title: 'Flutter Fundamentals',
        lessons: [
          { id: '6-1-1', title: 'Widgets and Layouts', duration: '22:10', type: 'video' },
          { id: '6-1-2', title: 'State Management', duration: '25:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'AWS Cloud Practitioner',
    category: 'Cloud Computing',
    author: 'Jennifer Wilson',
    duration: '5 weeks',
    students: 1450,
    lessons: 28,
    quizzes: 5,
    rating: 4.7,
    reviews: 37890,
    price: 65.0,
    originalPrice: 85.0,
    description: 'Prepare for AWS Cloud Practitioner certification and learn fundamental cloud computing concepts.',
    featured: false,
    image: '/assets/images/course1.png',
    chapters: [
      {
        id: '7-1',
        title: 'Cloud Concepts',
        lessons: [
          { id: '7-1-1', title: 'Cloud Service Models', duration: '16:30', type: 'video' },
          { id: '7-1-2', title: 'AWS Global Infrastructure', duration: '18:20', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Advanced JavaScript Patterns',
    category: 'Web Development',
    author: 'David Kim',
    duration: '4 weeks',
    students: 1780,
    lessons: 22,
    quizzes: 4,
    rating: 4.9,
    reviews: 41230,
    price: 55.0,
    originalPrice: 75.0,
    description: 'Master advanced JavaScript patterns and modern ES6+ features for professional web development.',
    featured: true,
    image: '/assets/images/course2.png',
    chapters: [
      {
        id: '8-1',
        title: 'ES6+ Features',
        lessons: [
          { id: '8-1-1', title: 'Arrow Functions and Destructuring', duration: '14:45', type: 'video' },
          { id: '8-1-2', title: 'Async/Await Patterns', duration: '19:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '9',
    title: 'Content Writing Mastery',
    category: 'Writing',
    author: 'Lisa Brown',
    duration: '3 weeks',
    students: 890,
    lessons: 18,
    quizzes: 3,
    rating: 4.6,
    reviews: 26789,
    price: 45.0,
    originalPrice: 65.0,
    description: 'Learn professional content writing techniques for blogs, websites, and social media.',
    featured: false,
    image: '/assets/images/course3.png',
    chapters: [
      {
        id: '9-1',
        title: 'Writing Fundamentals',
        lessons: [
          { id: '9-1-1', title: 'SEO Writing Techniques', duration: '15:20', type: 'video' },
          { id: '9-1-2', title: 'Content Structure', duration: '17:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '10',
    title: 'React Native Mobile Development',
    category: 'Mobile Development',
    author: 'Michael Taylor',
    duration: '6 weeks',
    students: 1950,
    lessons: 32,
    quizzes: 6,
    rating: 4.8,
    reviews: 48901,
    price: 70.0,


originalPrice: 90.0,
    description: 'Build native mobile apps using React Native and JavaScript for both iOS and Android platforms.',
    featured: true,
    image: '/assets/images/course4.png',
    chapters: [
      {
        id: '10-1',
        title: 'React Native Basics',
        lessons: [
          { id: '10-1-1', title: 'Components and Props', duration: '20:15', type: 'video' },
          { id: '10-1-2', title: 'Navigation and Routing', duration: '23:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '11',
    title: 'Machine Learning Fundamentals',
    category: 'Data Science',
    author: 'Dr. Amanda White',
    duration: '8 weeks',
    students: 1650,
    lessons: 40,
    quizzes: 8,
    rating: 4.9,
    reviews: 52345,
    price: 85.0,
    originalPrice: 110.0,
    description: 'Introduction to machine learning algorithms, neural networks, and practical applications.',
    featured: true,
    image: '/assets/images/course5.png',
    chapters: [
      {
        id: '11-1',
        title: 'ML Algorithms',
        lessons: [
          { id: '11-1-1', title: 'Linear Regression', duration: '24:30', type: 'video' },
          { id: '11-1-2', title: 'Decision Trees', duration: '21:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '12',
    title: 'Graphic Design for Beginners',
    category: 'Design',
    author: 'Chris Evans',
    duration: '4 weeks',
    students: 2100,
    lessons: 25,
    quizzes: 4,
    rating: 4.7,
    reviews: 45678,
    price: 50.0,
    originalPrice: 70.0,
    description: 'Learn graphic design principles, color theory, and Adobe Creative Suite tools.',
    featured: false,
    image: '/assets/images/course6.png',
    chapters: [
      {
        id: '12-1',
        title: 'Design Principles',
        lessons: [
          { id: '12-1-1', title: 'Color Theory Basics', duration: '16:20', type: 'video' },
          { id: '12-1-2', title: 'Typography Fundamentals', duration: '18:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '13',
    title: 'DevOps Engineering',
    category: 'DevOps',
    author: 'Brian Miller',
    duration: '7 weeks',
    students: 1350,
    lessons: 35,
    quizzes: 7,
    rating: 4.8,
    reviews: 38901,
    price: 80.0,
    originalPrice: 100.0,
    description: 'Learn DevOps practices including CI/CD, containerization, and infrastructure as code.',
    featured: true,
    image: '/assets/images/course1.png',
    chapters: [
      {
        id: '13-1',
        title: 'CI/CD Pipelines',
        lessons: [
          { id: '13-1-1', title: 'Jenkins Setup', duration: '22:15', type: 'video' },
          { id: '13-1-2', title: 'Docker Containers', duration: '25:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '14',
    title: 'Business Analytics',
    category: 'Business',
    author: 'Rachel Green',
    duration: '5 weeks',
    students: 980,
    lessons: 26,
    quizzes: 5,
    rating: 4.6,
    reviews: 31234,
    price: 60.0,
    originalPrice: 80.0,
    description: 'Learn data analysis techniques for business decision making and strategy development.',
    featured: false,
    image: '/assets/images/course2.png',
    chapters: [
      {
        id: '14-1',
        title: 'Data Analysis',
        lessons: [
          { id: '14-1-1', title: 'Excel for Analytics', duration: '19:20', type: 'video' },
          { id: '14-1-2', title: 'Data Visualization', duration: '21:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '15',
    title: 'iOS App Development with Swift',
    category: 'Mobile Development',
    author: 'Kevin Johnson',
    duration: '9 weeks',
    students: 1750,
    lessons: 45,
    quizzes: 9,
    rating: 4.9,
    reviews: 47890,
    price: 90.0,
    originalPrice: 120.0,
    description: 'Complete iOS app development course using Swift and Xcode for Apple platforms.',


featured: true,
    image: '/assets/images/course3.png',
    chapters: [
      {
        id: '15-1',
        title: 'Swift Basics',
        lessons: [
          { id: '15-1-1', title: 'Swift Syntax', duration: '23:30', type: 'video' },
          { id: '15-1-2', title: 'UIKit Fundamentals', duration: '26:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '16',
    title: 'Cybersecurity Fundamentals',
    category: 'Security',
    author: 'Mark Wilson',
    duration: '6 weeks',
    students: 1250,
    lessons: 30,
    quizzes: 6,
    rating: 4.8,
    reviews: 34567,
    price: 70.0,
    originalPrice: 90.0,
    description: 'Learn essential cybersecurity concepts, threat detection, and prevention techniques.',
    featured: false,
    image: '/assets/images/course4.png',
    chapters: [
      {
        id: '16-1',
        title: 'Security Basics',
        lessons: [
          { id: '16-1-1', title: 'Network Security', duration: '20:15', type: 'video' },
          { id: '16-1-2', title: 'Encryption Methods', duration: '22:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '17',
    title: 'Video Editing with Premiere Pro',
    category: 'Video Production',
    author: 'Sophia Martinez',
    duration: '4 weeks',
    students: 1450,
    lessons: 22,
    quizzes: 4,
    rating: 4.7,
    reviews: 38901,
    price: 55.0,
    originalPrice: 75.0,
    description: 'Master video editing techniques using Adobe Premiere Pro for professional results.',
    featured: true,
    image: '/assets/images/course5.png',
    chapters: [
      {
        id: '17-1',
        title: 'Editing Basics',
        lessons: [
          { id: '17-1-1', title: 'Timeline Editing', duration: '18:45', type: 'video' },
          { id: '17-1-2', title: 'Color Grading', duration: '21:20', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '18',
    title: 'Project Management Professional (PMP)',
    category: 'Business',
    author: 'Robert Davis',
    duration: '10 weeks',
    students: 2100,
    lessons: 50,
    quizzes: 10,
    rating: 4.9,
    reviews: 56789,
    price: 95.0,
    originalPrice: 125.0,
    description: 'Prepare for PMP certification and learn project management methodologies and best practices.',
    featured: true,
    image: '/assets/images/course6.png',
    chapters: [
      {
        id: '18-1',
        title: 'PMBOK Guide',
        lessons: [
          { id: '18-1-1', title: 'Project Lifecycle', duration: '25:30', type: 'video' },
          { id: '18-1-2', title: 'Risk Management', duration: '22:45', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '19',
    title: 'Blockchain Development',
    category: 'Web Development',
    author: 'Daniel Lee',
    duration: '7 weeks',
    students: 950,
    lessons: 35,
    quizzes: 7,
    rating: 4.8,
    reviews: 28901,
    price: 85.0,
    originalPrice: 105.0,
    description: 'Learn blockchain technology, smart contracts, and decentralized application development.',
    featured: false,
    image: '/assets/images/course1.png',
    chapters: [
      {
        id: '19-1',
        title: 'Blockchain Basics',
        lessons: [
          { id: '19-1-1', title: 'Cryptocurrency Fundamentals', duration: '21:15', type: 'video' },
          { id: '19-1-2', title: 'Smart Contracts', duration: '24:30', type: 'video' },
        ]
      }
    ]
  },
  {
    id: '20',
    title: 'Photography Masterclass',
    category: 'Photography',
    author: 'Emma Wilson',
    duration: '5 weeks',
    students: 1850,
    lessons: 28,
    quizzes: 5,
    rating: 4.7,
    reviews: 42345,
    price: 65.0,
    originalPrice: 85.0,
    description: 'Professional photography techniques including composition, lighting, and post-processing.',
    featured: true,
    image: '/assets/images/course2.png',
    chapters: [
      {
        id: '20-1',
        title: 'Camera Basics',
        lessons: [
          { id: '20-1-1', title: 'Exposure Triangle', duration: '19:20', type: 'video' },
          { id: '20-1-2', title: 'Composition Rules', duration: '22:45', type: 'video' },
        ]
      }
    ]
  }
];