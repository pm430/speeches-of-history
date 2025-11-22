import React from 'react';

const Header = () => {
    return (
        <header className="p-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-10">
            <div className="flex items-center h-12 justify-between">
                <div className="flex size-12 shrink-0 items-center justify-start text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-end">
                    <img
                        alt="User profile picture"
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWxFrwvJNubkioPWlCgDE3ygXGn1fNczt2RmavVhnTzISrMyDFqeImR4JSHWSP8-HRpxBtgT0_8girnEDZTX_CXKqKcZyOJIWtTTikDo_3BlNOCWpVCe69nt39cFnFMxjyb-7tK9q28JeCiic_hyOX_u_YKrc1PnoVhhfk-vFSkGb-4q3NL9eniSd4BJinY385N_xjAr-tqHspWmE1Meu7DkivNfDgjPcpPe5DcrCMZM5VHUQ_a_VCZ81lndYTs--HTUR2R_tAjkM"
                    />
                </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight px-0 text-left pt-2">연설의 순간들</h1>
            <p className="text-base font-normal leading-normal pt-1 px-0">세계 지도자들의 연설문 핵심 문장을 다양한 언어로 만나보세요.</p>
        </header>
    );
};

export default Header;
