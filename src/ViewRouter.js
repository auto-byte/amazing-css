import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

const RevealText = React.lazy(() => import('./views/RevealText'));
const StairLoading = React.lazy(() => import('./views/StairLoading'));
const WaveLoading = React.lazy(() => import('./views/WaveLoading'));
const ShrinkingLoading = React.lazy(() => import('./views/ShrinkingLoading'));
const GleamingLoading = React.lazy(() => import('./views/GleamingLoading'));
const ParticleBurst = React.lazy(() => import('./views/ParticleBurst'));
const GleamingHeading = React.lazy(() => import('./views/GleamingHeading'));
const Snow = React.lazy(() => import('./views/Snow'));
const RiseInText = React.lazy(() => import('./views/RiseInText'));
const LandInText = React.lazy(() => import('./views/LandInText'));

export default function ViewRouter() {
    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<RevealText />} />
                        <Route path='/reveal-text' element={<RevealText />} />
                        <Route path='/stair-loading' element={<StairLoading />} />
                        <Route path='/wave-loading' element={<WaveLoading />} />
                        <Route path='/shrinking-loading' element={<ShrinkingLoading />} />
                        <Route path='/gleaming-loading' element={<GleamingLoading />} />
                        <Route path='/particle-burst' element={<ParticleBurst />} />
                        <Route path='/gleaming-heading' element={<GleamingHeading />} />
                        <Route path='/snow' element={<Snow />} />
                        <Route path='/rise-in-text' element={<RiseInText />} />
                        <Route path='/landin-text' element={<LandInText />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </>
    )
}
