const asyncHandler = require("express-async-handler");
const Course = require('../models/Course');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');

// @desc    Get course details
// @route   GET /api/course
// @access  Public
const getCourse = asyncHandler(async (req, res) => {
    try {
        const course = await Course.findOne({ title: 'The ConnextGen Professional Readiness Course' })
            .populate({
                path: 'units',
                options: { sort: { order: 1 } },
                populate: {
                    path: 'lessons',
                    options: { sort: { order: 1 } }
                }
            });
        
        if (!course) {
            res.status(404);
            throw new Error('Course not found.');
        }

        const courseData = {
            title: course.title,
            description: course.description,
            units: course.units.map(unit => ({
                title: unit.title,
                lessons: unit.lessons.map(lesson => ({
                    title: lesson.title,
                    order: lesson.order,
                    key: lesson.key
                }))
            }))
        };

        res.status(200).json(courseData);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching course details', err});
    }
});

// @desc    Get lesson content
// @route   GET /api/course/:unit/:lesson
// @access  Public
const getLesson = asyncHandler(async (req, res) => {
    const { unitName, lessonName } = req.params;

    try {
        const unit = await Unit.findOne({ title: unitName }).populate({
            path: 'lessons',
            match: { title: lessonName }
        });

        if (!unit || !unit.lessons.length) {
            return res.status(404).json({ message: 'Lesson not found' });
        }

        const lesson = {
            title: unit.lessons[0].title,
            content: await getS3Object(unit.lessons[0].key)
        };

        res.status(200).json(lesson);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching lesson content', err });
    }
});

module.exports = {
    getCourse,
    getLesson
};