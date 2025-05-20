export const PROJECTS = [
    {
        title: "Human Activity Classification & Clustering System",
        keywords: ["Python", "pandas", "Matplotlib", "Neural Networks"],
        summary: "A data mining system utilizing classification and clustering to analyze human activity data from wearable sensors.\n\n" +
            "Classification models (MLP, Random Forest, Bayesian Networks) and clustering algorithms (K-Means, DBSCAN) were applied after data preprocessing and visualization.",
        description: "A data mining and machine learning system for classifying and clustering human activity data from wearable sensors. The preprocessing pipeline, built with Pandas and NumPy, handles missing values, normalizes sensor readings, and structures data for analysis. Visualization is done using Matplotlib and Seaborn.\n" +
            "\n" +
            "For classification, Scikit-learn models —Neural Networks (MLP), Random Forest, and Bayesian Networks— were evaluated using accuracy, precision, recall, and F1-score. Random Forest achieved the highest accuracy but showed overfitting, while Neural Networks offered the best balance.\n" +
            "\n" +
            "For clustering, K-Means effectively grouped activities, whereas DBSCAN struggled with high-dimensional data.",
        report: "../../public/reports/Project_DataMining_Report.pdf",
        source: "https://github.com/alex-xiarchos/ceid-DataMining",
    },
    {
        title: "Information Retrieval Project",
        keywords: ["Python", "NumPy", "Matplotlib", "VSM", "ColBERT"],
        summary: "An Information Retrieval system utilizing both traditional and deep-learning-based models to process and rank text documents.\n" +
            "\n" +
            "It implements a Vector Space Model with TF-IDF weighting and a deep-learning retrieval model (ColBERT), along with preprocessing, inverted indexing, and query ranking.",
        description: "An Information Retrieval system built in Python to efficiently process and rank text documents. It implements a Vector Space Model (VSM) with TF-IDF weighting and a deep-learning-based retrieval model (ColBERT). The system performs document preprocessing, inverted indexing, and query ranking to retrieve relevant results.\n" +
            "\n" +
            "The preprocessing pipeline removes stopwords, applies stemming, and tokenizes text using NLTK. An inverted index maps terms to document occurrences for fast retrieval. The VSM model computes TF-IDF weights with two schemes and ranks documents based on cosine similarity. The ColBERT model, integrated via Google Colab, leverages a pretrained transformer-based architecture for contextualized ranking.",
        report: "../../public/reports/Project_InfoRetrieval_Report.pdf",
        source: "https://github.com/alex-xiarchos/ceid-InfoRetrival",
    },
    {
        title: "Multi-Dimensional Data Indexing & Search System",
        keywords: ["Python", "LSH", "pandas", "NumPy"],
        summary: "A data structures system for efficiently storing, querying, and comparing multi-dimensional data.\n" +
            "\n" +
            "It implements Range Tree, K-D Tree, R-Tree, and Quad Tree for spatial searching, along with Locality-Sensitive Hashing (LSH) for approximate similarity search.\n" +
            "\n" +
            "Data was scraped from Wikipedia, structured in CSV format, and processed with text preprocessing techniques.",
        description: "A data structures system designed to efficiently store, query, and compare data points in a multi-dimensional space. A custom dataset of computer scientists was built by scraping Wikipedia with BeautifulSoup and storing structured data in CSV format.\n" +
            "\n" +
            "To enable efficient spatial searching, four advanced data structures were implemented: Range Tree, K-D Tree, R-Tree, and Quad Tree. Each supports multi-dimensional queries for fast range searches based on scientists' names, awards, and education. The Range Tree and K-D Tree use balanced binary search trees (BBSTs), the R-Tree employs bounding boxes for spatial indexing, and the Quad Tree recursively divides space for hierarchical searching.\n" +
            "\n" +
            "An approximate similarity search algorithm using Locality-Sensitive Hashing (LSH) was also implemented. The LSH model applies MinHashing to compare educational backgrounds efficiently, using Jaccard similarity and One-Hot Encoding. The text preprocessing pipeline integrates tokenization, stopword removal, stemming, and regex parsing.\n" +
            "\n" +
            "Benchmarking showed K-D Tree and Range Tree had the fastest queries, R-Tree handled irregular data well, and Quad Tree was slower due to recursion.",
        report: "../../public/reports/Project_MultiDimStructures_Report.pdf",
        source: "https://github.com/alex-xiarchos/ceid-MultidimensionalDataStructures",
    },
    {
        title: "Thesis: Task Management App using Mendix",
        keywords: ["Low Code", "Mendix"],
        summary: "A cloud-deployed task management application built with the Mendix low-code platform.\n" +
            "\n" +
            "It uses domain models for data structuring, microflows for process automation, and custom UI components like Kanban boards and calendar views.\n" +
            "\n" +
            "Role-based authentication ensures secure multi-user access for administrators and standard users.",
        description: "A task management application built with the Mendix low-code platform and deployed on a cloud environment. The system structures data using domain models, defining entity relationships and associations, while microflows handle process automation, user interactions, and database operations.\n" +
            "\n" +
            "Custom UI/UX components were developed using Mendix widgets and layouts, incorporating Kanban boards and calendar views for an intuitive experience. Role-based authentication and access control ensure secure multi-user functionality, supporting both administrator and standard user roles.",
        report: "../../public/reports/Project_Mendix.pdf",
        source: "https://unitask-sandbox.mxapps.io/login.html",
    },
    {
        title: "Disaster Management Web Platform",
        keywords: ["JavaScript", "PHP", "JQuery", "Tailwind CSS","SQL"],
        summary: "A web-based disaster management platform allowing citizens to request or offer essential items, with rescuers coordinating logistics.\n" +
            "\n" +
            "Built using JavaScript, PHP, jQuery, and AJAX for server-side interactions, with front-end features including Leaflet maps, Tailwind CSS, SweetAlert2 notifications, and Chart.js for data visualization.",
        description: "Developed a web‑based disaster management platform enabling citizens to request or offer essential items, with rescuers coordinating pickups and deliveries to and from a central base.\n" +
            "\n" +
            "Developed using JavaScript, PHP, jQuery and AJAX for server‑side interactions, with front‑end enhancements utilizing Leaflet for interactive maps, Tailwind CSS for responsive design, sweetalert2 for user popup notifications, and Chart.js for statistic data visualization.",
        report: "../../public/reports/Project_WebDev_Report.pdf",
        source: "https://github.com/alex-xiarchos/ceid-Web/",
    },
    // {
    //     title: "",
    //     keywords: [],
    //     summary: "",
    //     description: "",
    //     report: "",
    //     source: "",
    // }
]