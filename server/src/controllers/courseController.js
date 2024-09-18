const { getObject } = require('../services/courseService');
const asyncHandler = require("express-async-handler");
const Course = require('../models/Course');
const Unit = require('../models/Unit');

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
            res.status(404).json({ message: 'Course not found' });
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

// @desc    Get unit with lessons
// @route   GET /api/course/:unit
// @access  Public
const getUnit = asyncHandler(async (req, res) => {
    const { unit } = req.params;

    try {
        const foundUnit = await Unit.findOne({ title: unit }).populate('lessons');

        if (!foundUnit) {
            res.status(404).json({ message: 'Unit not found' });
        }

        res.status(200).json(foundUnit);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching unit', err });
    }
});


// @desc    Get lesson content
// @route   GET /api/course/:unit/:lesson
// @access  Public
const getLesson = asyncHandler(async (req, res) => {
    const { unit, lesson } = req.params;

    try {
        const foundUnit = await Unit.findOne({ title: unit }).populate({
            path: 'lessons',
            match: { title: lesson }
        });

        if (!foundUnit || !foundUnit.lessons.length) {
            return res.status(404).json({ message: 'Lesson not found' });
        }

        res.status(200).json(await getObject(foundUnit.lessons[0].key));
    } catch (err) {
        res.status(500).json({ message: 'Error fetching lesson content', err });
    }
});


// @desc    Get previous lesson
// @route   GET /api/course/:unit/:lesson/previous
// @access  Public
const getPreviousLesson = async (req, res) => {
    const { unit, lesson } = req.params;

    try {
        const currentUnit = await Unit.findOne({ title: unit }).populate({
            path: 'lessons',
            options: { sort: { order: 1 } }
        });

        if (!currentUnit) {
            return res.status(404).json({ message: 'Unit not found' });
        }

        const currentLessonIndex = currentUnit.lessons.findIndex(lessonObj => lessonObj.title === lesson);

        if (currentLessonIndex === -1) {
            return res.status(404).json({ message: 'Lesson not found in this unit' });
        }

        if (currentLessonIndex > 0) {
            return res.status(200).json({
                unit: currentUnit.title,
                lesson: currentUnit.lessons[currentLessonIndex - 1].title
            });
        } else {
            const previousUnit = await Unit.findOne({ order: { $lt: currentUnit.order } }).sort({ order: -1 }).populate({
                path: 'lessons',
                options: { sort: { order: 1 } }
            });

            if (previousUnit && previousUnit.lessons.length > 0) {
                return res.status(200).json({
                    unit: previousUnit.title,
                    lesson: previousUnit.lessons[previousUnit.lessons.length - 1].title
                });
            }
        }

        return res.status(200).json({
            unit: null,
            title: null
        });

    } catch (err) {
        return res.status(500).json({ message: 'Error fetching previous lesson', error: err.message });
    }
};



// @desc    Get next lesson
// @route   GET /api/course/:unit/:lesson/next
// @access  Public
const getNextLesson = async (req, res) => {
    const { unit, lesson } = req.params;

    try {
        const currentUnit = await Unit.findOne({ title: unit }).populate({
            path: 'lessons',
            options: { sort: { order: 1 } }
        });

        if (!currentUnit) {
            return res.status(404).json({ message: 'Unit not found' });
        }

        const currentLessonIndex = currentUnit.lessons.findIndex(lessonObj => lessonObj.title === lesson);

        if (currentLessonIndex === -1) {
            return res.status(404).json({ message: 'Lesson not found in this unit' });
        }

        if (currentLessonIndex < currentUnit.lessons.length - 1) {
            return res.status(200).json({
                unit: currentUnit.title,
                lesson: currentUnit.lessons[currentLessonIndex + 1].title
            });
        } else {
            const nextUnit = await Unit.findOne({ order: { $gt: currentUnit.order } }).sort({ order: 1 }).populate({
                path: 'lessons',
                options: { sort: { order: 1 } }
            });

            if (nextUnit && nextUnit.lessons.length > 0) {
                return res.status(200).json({
                    unit: nextUnit.title,
                    lesson: nextUnit.lessons[0].title
                });
            }
        }

        return res.status(200).json({
            unit: null,
            lesson: null
        });

    } catch (err) {
        return res.status(500).json({ message: 'Error fetching next lesson', error: err.message });
    }
};



module.exports = {
    getCourse,
    getUnit,
    getLesson,
    getPreviousLesson,
    getNextLesson
};