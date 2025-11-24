// 번역 데이터
const translations = {
  en: {
    'landing.greeting': "Hi, I'm",
    'aboutme.title': 'About Me',
    'aboutme.description': "I'm Chaeyoung Kim, a data engineer passionate about building scalable data pipelines and ML infrastructure. With experience in real-time data processing using Kafka, ClickHouse, and Airflow, I specialize in developing ETL workflows.",
    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'projects.view_code': 'View Code',
    'timeline.title': 'Timeline',
    'timeline.cv_text': 'For more information, have a look at my',
    'timeline.cv_link': 'curriculum vitae',
    'contact.title': 'Contact',
    'contact.description': 'Feel free to reach out!',
    'footer.built_with': 'Built with',
    'footer.powered_by': 'and powered by'
  },
  ko: {
    'landing.greeting': '안녕하세요, 저는',
    'aboutme.title': '소개',
    'aboutme.description': '확장 가능한 데이터 파이프라인과 ML 인프라 구축에 열정을 가진 데이터 엔지니어 김채영입니다. Kafka, ClickHouse, Airflow를 활용한 실시간 데이터 처리 경험을 바탕으로 ETL 워크플로우 개발을 전문으로 합니다.',
    'skills.title': '기술 스택',
    'projects.title': '프로젝트',
    'projects.view_code': '코드 보기',
    'timeline.title': '타임라인',
    'timeline.cv_text': '자세한 정보는',
    'timeline.cv_link': '이력서',
    'contact.title': '연락처',
    'contact.description': '언제든 연락 주세요!',
    'footer.built_with': '제작 도구:',
    'footer.powered_by': '및 호스팅:'
  }
};

// 타이핑 효과 데이터
const typingTexts = {
  en: [
    "Data Engineering Enthusiast.",
    "Scroll down for more."
  ],
  ko: [
    "열정적인 데이터 엔지니어입니다.",
    "아래로 스크롤 해주세요."
  ]
};

// 프로젝트 설명 번역
const projectDescriptions = {
  en: {
    'GridTune-Parallel': 'A multithreaded hyperparameter tuning system that leverages C\'s pthread library to parallelize grid search over different hyperparameter combinations. Each thread executes a Python subprocess to train a dummy classification model with specific parameters. All experiment results are tracked and visualized using MLflow, enabling systematic selection of the best-performing configuration.',
    'PacketNet-Detector': 'A lightweight intrusion detection system prototype that parses raw network packet logs using a C-based parser and applies a TensorFlow CNN model for attack classification. It simulates a real-world packet analysis pipeline by extracting IP, port, protocol, and flag features via bitwise operations and struct parsing, then feeding them into a deep learning model for binary classification of malicious behavior.',
    'SequentialDataPipeline': 'An automated data pipeline for sequential user behavior data that integrates extraction, transformation, and loading (ETL) using Airflow.',
    'BITTOK': 'A weather chatbot that recommends appropriate clothing and food based on the user\'s current location and weather conditions. It was developed using a Retrieval-Augmented Generation (RAG) structure, leveraging the GPT-4 API key and a custom database built through Python-based web crawling and NLP preprocessing, hosted on a GCP database.',
    'Document and Website Development': 'Designed and developed a website hosted via GitHub Pages using the Jekyll framework. Additionally, created comprehensive documentation implemented with the Python-Sphinx framework, hosted on ReadTheDocs to enhance user understanding of the project structure.',
    'GraphRAG-Based Research-Article Retrieval': 'Designed and implemented a framework to automate the retrieval, parsing, and storage of research articles based on user-defined search queries or keywords. Leveraged PUBMED and EuropePMC APIs to download PDF and XML papers, parsed them, and saved the results as Parquet files in Azure Blob Storage. Integrated this data with a GraphRAG system, enabling the retrieval of the most relevant answers based on user input. The GraphRAG system was built using the LangChain framework and Neo4j database, with Cypher queries for efficient graph traversal.',
    'Cheat\'em in Texas': 'Designed and implemented the UI/UX and customized C# scripts for an Oculus-based VR game using Unity, featuring a poker-themed cheating scenario where players aim to achieve a target amount in a Texas Hold\'em casino setting. Configured the XR Interaction Toolkit and Meta XR SDK to create intuitive interfaces and interactions, enabling players to seamlessly act as both the dealer and player while executing sleight-of-hand tricks. Contributed to gameplay mechanics and integrated dynamic AI opponents using Barracuda and ONNX, delivering an immersive and engaging user experience.',
    'OpenSearch Project': 'A project to index game item data using OpenSearch and Sentence Transformers, and build a REST API that provides keyword search and vector-based recommendation functions.',
    'NPU Profiler Project': 'A project to implement a simple profiler for measuring and analyzing the performance of deep learning model (CNN) on NPU.'
  },
  ko: {
    'GridTune-Parallel': 'C의 pthread 라이브러리를 활용하여 다양한 하이퍼파라미터 조합에 대한 그리드 서치를 병렬화하는 멀티스레드 하이퍼파라미터 튜닝 시스템입니다. 각 스레드는 특정 파라미터로 더미 분류 모델을 학습하는 Python 서브프로세스를 실행하며, 모든 실험 결과는 MLflow를 사용하여 추적 및 시각화되어 최적의 성능 구성을 체계적으로 선택할 수 있습니다.',
    'PacketNet-Detector': 'C 기반 파서를 사용하여 원시 네트워크 패킷 로그를 파싱하고 TensorFlow CNN 모델을 적용하여 공격을 분류하는 경량 침입 탐지 시스템 프로토타입입니다. 비트 연산 및 구조체 파싱을 통해 IP, 포트, 프로토콜, 플래그 특성을 추출한 후 딥러닝 모델에 입력하여 악성 행위를 이진 분류하는 실제 패킷 분석 파이프라인을 시뮬레이션합니다.',
    'SequentialDataPipeline': 'Airflow를 사용하여 추출, 변환, 로드(ETL)를 통합한 순차적 사용자 행동 데이터를 위한 자동화된 데이터 파이프라인입니다.',
    'BITTOK': '사용자의 현재 위치와 날씨 조건을 기반으로 적절한 옷차림과 음식을 추천하는 날씨 챗봇입니다. GPT-4 API 키와 Python 기반 웹 크롤링 및 NLP 전처리를 통해 구축된 커스텀 데이터베이스를 활용하여 RAG(Retrieval-Augmented Generation) 구조로 개발되었으며, GCP 데이터베이스에 호스팅되어 있습니다.',
    'Document and Website Development': 'Jekyll 프레임워크를 사용하여 GitHub Pages를 통해 호스팅되는 웹사이트를 설계 및 개발했습니다. 또한 Python-Sphinx 프레임워크로 구현된 포괄적인 문서를 작성하여 ReadTheDocs에 호스팅하여 프로젝트 구조에 대한 사용자 이해를 향상시켰습니다.',
    'GraphRAG-Based Research-Article Retrieval': '사용자 정의 검색 쿼리 또는 키워드를 기반으로 연구 논문의 검색, 파싱 및 저장을 자동화하는 프레임워크를 설계 및 구현했습니다. PUBMED 및 EuropePMC API를 활용하여 PDF 및 XML 논문을 다운로드하고 파싱한 후 Azure Blob Storage에 Parquet 파일로 저장했습니다. 이 데이터를 GraphRAG 시스템과 통합하여 사용자 입력을 기반으로 가장 관련성 높은 답변을 검색할 수 있도록 했습니다. GraphRAG 시스템은 LangChain 프레임워크와 Neo4j 데이터베이스를 사용하여 구축되었으며, Cypher 쿼리를 통한 효율적인 그래프 탐색이 가능합니다.',
    'Cheat\'em in Texas': 'Unity를 사용하여 Oculus 기반 VR 게임을 위한 UI/UX를 설계 및 구현하고 C# 스크립트를 커스터마이징했습니다. 텍사스 홀덤 카지노 환경에서 플레이어가 목표 금액을 달성하는 포커 테마의 속임수 시나리오를 특징으로 합니다. XR Interaction Toolkit과 Meta XR SDK를 구성하여 직관적인 인터페이스와 상호작용을 만들어 플레이어가 딜러와 플레이어 역할을 원활하게 수행하며 속임수 기술을 실행할 수 있도록 했습니다. 게임플레이 메커니즘에 기여하고 Barracuda 및 ONNX를 사용하여 동적 AI 상대를 통합하여 몰입감 있고 매력적인 사용자 경험을 제공했습니다.',
    'OpenSearch Project': 'OpenSearch와 Sentence Transformers를 사용하여 게임 아이템 데이터를 인덱싱하고 키워드 검색 및 벡터 기반 추천 기능을 제공하는 REST API를 구축하는 프로젝트입니다.',
    'NPU Profiler Project': 'NPU에서 딥러닝 모델(CNN)의 성능을 측정 및 분석하기 위한 간단한 프로파일러를 구현하는 프로젝트입니다.'
  }
};

// Timeline 번역
const timelineTranslations = {
  en: {
    'CTILab': 'AI Researcher',
    'AI Science Lab': 'Undergraduate Researcher',
    'Sejong University': 'B.S. Data Science'
  },
  ko: {
    'CTILab': 'AI 연구원',
    'AI Science Lab': '학부 연구원',
    'Sejong University': '데이터사이언스 학사'
  }
};

// 현재 언어 가져오기
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// TxtRotate 클래스 (기존 타이핑 효과)
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

// 언어 설정
function setLanguage(lang) {
  console.log('Setting language to:', lang);
  
  // 1. 기본 텍스트 번역
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // 2. 타이핑 효과 업데이트
  const rotateElement = document.getElementById('txt-rotate');
  if (rotateElement) {
    const period = parseInt(rotateElement.getAttribute('data-period')) || 2000;
    // 새로운 TxtRotate 인스턴스 생성
    new TxtRotate(rotateElement, typingTexts[lang], period);
  }
  
  // 3. 프로젝트 설명 번역
  document.querySelectorAll('.project').forEach(projectCard => {
    const projectName = projectCard.querySelector('h3');
    const projectDesc = projectCard.querySelector('.project-desc');
    
    if (projectName && projectDesc) {
      const name = projectName.textContent.trim();
      if (projectDescriptions[lang] && projectDescriptions[lang][name]) {
        projectDesc.textContent = projectDescriptions[lang][name];
      }
    }
  });
  
  // 4. Timeline subtitle 번역
  document.querySelectorAll('.timeline li').forEach(item => {
    const titleElement = item.querySelector('.flag a span');
    const descElement = item.querySelector('.desc');
    
    if (titleElement && descElement) {
      const title = titleElement.textContent.trim();
      if (timelineTranslations[lang] && timelineTranslations[lang][title]) {
        // 기존 텍스트 노드만 찾아서 변경
        const childNodes = Array.from(descElement.childNodes);
        const textNode = childNodes.find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
        
        if (textNode) {
          textNode.textContent = timelineTranslations[lang][title];
        }
      }
    }
  });
  
  // 5. 버튼 활성화 상태 업데이트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // 6. localStorage에 저장
  localStorage.setItem('language', lang);
  
  console.log('Language set to:', lang);
}

// 페이지 로드 시 실행
window.addEventListener('load', function() {
  console.log('Language switcher loaded');
  
  const currentLang = getCurrentLanguage();
  
  // 초기 언어 설정
  setTimeout(() => {
    if (currentLang === 'ko') {
      setLanguage('ko');
    }
  }, 500);
  
  // 언어 버튼 클릭 이벤트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      console.log('Button clicked, switching to:', lang);
      setLanguage(lang);
    });
  });
});
