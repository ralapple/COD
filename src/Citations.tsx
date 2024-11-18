import GeneralHeader from "./Header";


const CitationsText = () => {
    return(
        <div className="citationsList">
            <ol>
                <li>Redmon, J. "You only look once: Unified, real-time object detection." In Proceedings of the IEEE conference on computer vision and pattern recognition. 2016.</li>
                <li>Zhao, Hengshuang, Jianping Shi, Xiaojuan Qi, Xiaogang Wang, and Jiaya Jia. "Pyramid scene parsing network." In Proceedings of the IEEE conference on computer vision and pattern recognition, pp. 2881-2890. 2017.</li>
                <li>He, Kaiming, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. "Deep residual learning for image recognition." In Proceedings of the IEEE conference on computer vision and pattern recognition, pp. 770-778. 2016.</li>
                <li>Fan, Deng-Ping, Ge-Peng Ji, Guolei Sun, Ming-Ming Cheng, Jianbing Shen, and Ling Shao. "Camouflaged object detection." In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pp. 2777-2787. 2020.</li>
                <li>Ronneberger, Olaf, Philipp Fischer, and Thomas Brox. "U-net: Convolutional networks for biomedical image segmentation." In Medical image computing and computer-assisted intervention–MICCAI 2015: 18th international conference, Munich, Germany, October 5-9, 2015, proceedings, part III 18, pp. 234-241. Springer International Publishing, 2015.</li>
                <li>Chen, Liang-Chieh. "Rethinking atrous convolution for semantic image segmentation." arXiv preprint arXiv:1706.05587 (2017).</li>
                <li>Xie, Enze, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M. Alvarez, and Ping Luo. "SegFormer: Simple and efficient design for semantic segmentation with transformers." Advances in neural information processing systems 34 (2021): 12077-12090.</li>
                <li>Lin, Tsung-Yi, Michael Maire, Serge Belongie, James Hays, Pietro Perona, Deva Ramanan, Piotr Dollár, and C. Lawrence Zitnick. "Microsoft coco: Common objects in context." In Computer Vision–ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part V 13, pp. 740-755. Springer International Publishing, 2014.</li>
                <li>Zhou, Bolei, Hang Zhao, Xavier Puig, Tete Xiao, Sanja Fidler, Adela Barriuso, and Antonio Torralba. "Semantic understanding of scenes through the ade20k dataset." International Journal of Computer Vision 127 (2019): 302-321.</li>
                <li>Fan, Deng-Ping, Ge-Peng Ji, Ming-Ming Cheng, and Ling Shao. "Concealed object detection." IEEE transactions on pattern analysis and machine intelligence 44, no. 10 (2021): 6024-6042.</li>
                <li>Zhao, Jia-Xing, Jiang-Jiang Liu, Deng-Ping Fan, Yang Cao, Jufeng Yang, and Ming-Ming Cheng. "EGNet: Edge guidance network for salient object detection." In Proceedings of the IEEE/CVF international conference on computer vision, pp. 8779-8788. 2019.</li>
                <li><a href="https://www.kaggle.com/datasets/aalihhiader/military-camouflage-soldiers-dataset-mcs1k">https://www.kaggle.com/datasets/aalihhiader/military-camouflage-soldiers-dataset-mcs1k</a></li>
            </ol>
        </div>
    )
}


const CitationsPage = () => {
    return(
        <div className="App">
            <GeneralHeader />
            <div className='AppContent'>
                <h1>Citations</h1>
                <p>Resources used or referenced in this work.</p>
                <CitationsText />
            </div>
        </div>
    )
}

export default CitationsPage;