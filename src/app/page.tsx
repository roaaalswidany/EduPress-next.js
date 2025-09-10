'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '@/store/slices/coursesSlice';
import { AppDispatch, RootState } from '@/lib/types/index';
import Banner from '@/components/home/Banner';
import Categories from '@/components/home/Categories';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Stats from '@/components/home/Stats';
import LearnPressAddOns from '@/components/home/LearnPressAddOns';
import GrowYourSkill from '@/components/home/GrowYourSkill';
import Let from '@/components/home/Let';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { featuredCourses, status } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedCourses courses={featuredCourses} />
      <LearnPressAddOns/>
      <Stats />
      <GrowYourSkill/>
      <Let/>
    </div>
  );
}