# Frameworks-CSS-JS

# Autor
Instructor

git config --local credential.helper ""
git remote set-url origin https://github.com/Mauricio555555/Frameworks-CSS-JS.git

git push -u origin main

pnpm pkg set type=module scripts.dev=vite "scripts.build=vite build" "scripts.preview=vite preview"

pnpm install -D vite tailwindcss @tailwindcss/vite

# CSS                    |    TAILWIND
display: flex            | flex
flex-direction: column   | flex-col
flex-wrap: wrap          | flex-wrap
display: grid            | grid
gap: 1rem                | gap-4  => 1 - 0.25rem
padding: 1rem            | p-4

padding-inline: 1rem     | px-4 py-4
padding-block 1.5rem 

margin-inline: auto      | mx-auto
width: 100%              | w-full
min-height: 100vh        | min-h-screen

font-size: 1.125rem      | text-lg
font-weight: 600         | font-semibold
color: white             | text-white text-white-20
                           text-variable-global

position: sticky; left:0 | sticky left-0

overflow-x: auto         | overflow-x-auto