import './Hero.css';
import { Button } from '../../components/common/Button/Button';

export function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-label">TRENDING NOW</span> 
                        <h1>Discover Products
                            You'll Love
                        </h1>
                        <p>Shop the latest trending products
                            curated for modern lifestyles.
                        </p>
                        
                        <Button />

                        <div className="hero-stats">
                            <span>Loved by 50,000+ customers worldwide</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">

                </div>
            </section>
        </>
    )
}