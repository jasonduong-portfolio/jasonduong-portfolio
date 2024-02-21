import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  const chatboxRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<{ message: string; sender: string; content: string; timestamp: number; delayTime: number }[]>(
    [
      { message: '[All]', sender: 'jasonduong:', content: 'hi im a fullstack developer! with a emphasis on web development ', timestamp: 0, delayTime: 1 },
      { message: '[All]', sender: 'jasonduong:', content: 'technically also a designer', timestamp: 1000 * 1, delayTime: 2 },
      { message: '[All]', sender: 'domoclin:', content: 'who?', timestamp: 1000 * 1, delayTime: 1 },
      { message: '[All]', sender: 'jasonduong:', content: 'a junior from UC Berkeley', timestamp: 1000 * 2, delayTime: 1 },
      { message: '[All]', sender: 'domoclin:', content: 'who asked?', timestamp: 1000 * 2.5, delayTime: 1 },
      { message: '[All]', sender: 'jasonduong:', content: 'sigh too bad', timestamp: 1000 * 3, delayTime: 1 },
      { message: '[All]', sender: 'jasonduong:', content: 'OPEN FOR WORK!', timestamp: 1000 * 5, delayTime: 1 },
      { message: '[All]', sender: 'jasonduong:', content: 'also look at my cat iris', timestamp: 1000 * 8, delayTime: 1 },
      { message: '[All]', sender: 'domoclin:', content: 'muted', timestamp: 1000 * 8.5, delayTime: 2 },
      { message: '[Team]', sender: 'cactussstar:', content: 'what commands can i type in chat?', timestamp: 1000 * 9, delayTime: 0.5 },
      { message: '[Team]', sender: 'jasonduong:', content: '/resume', timestamp: 1000 * 9, delayTime: 0.5},
      { message: '[Team]', sender: 'jasonduong:', content: '/projects', timestamp: 1000 * 9, delayTime: 1 },
      { message: '[Team]', sender: 'jasonduong:', content: '/help, for more', timestamp: 1000 * 10, delayTime: 0 },

    ]
  );

  const [currentLine, setCurrentLine] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [startTime, setStartTime] = useState<number>(Date.now()); // Initial startTime
  const [chatRendered, setChatRendered] = useState<boolean>(false);
  const history = useHistory(); // Initialize useHistory hook



  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [currentLine]);

  useEffect(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prevLine) => prevLine + 1);
      }, lines[currentLine].delayTime * (1000));
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines]);

  useEffect(() => {
    if (currentLine === lines.length - 1) {
      setChatRendered(true);
    }
  }, [currentLine, lines]);
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('startTime:', startTime);

    if (inputValue.trim() == "") {
        return
    }
    if (currentLine >= lines.length) {
      setCurrentLine(0);
      setInputValue('');
    } else {
      const newLine = {
        message: '[All]',
        sender: 'cactussstar:',
        content: inputValue,
        timestamp: Date.now() - startTime // Calculate elapsed time
      };
      if (inputValue.toLowerCase() === '/help') {
        const newLine = {
            message: '',
            sender: '',
            content: "Available commands: /resume, /portfolio, /ff, /reset",
            timestamp: -9999 // Calculate elapsed time
        }
        setLines((prevLines) => [...prevLines, newLine]);
      } else if (inputValue.toLowerCase() === '/reset') {
        setCurrentLine(0);
        setStartTime(Date.now()); // Reset startTime on /reset
      } else if (inputValue.toLowerCase() === '/ff') {
        window.location.reload();
      } else if (inputValue.toLowerCase() === '/resume') {
        history.push('/resume')
      } else {
        setLines((prevLines) => [...prevLines, newLine]);
        setCurrentLine(currentLine + 1);
      }

      setInputValue('');
    }
  };

  const formatElapsedTime = (milliseconds: number): string => {
    const seconds = Math.floor(Math.abs(milliseconds) / 1000) % 60;
    const minutes = Math.floor(Math.abs(milliseconds) / (1000 * 60));
  
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  
  

  return (

   
    <div className="flex flex-col w-[40vw]">
      <div
        ref={chatboxRef}
        className="bg-grey   bg-opacity-[0.03] border p-4 font-gill-sans min-h-[30vh] max-h-[30vh] overflow-y-scroll"
      >
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <p key={index} className="text-black text-lg">
            <span className={line.sender === 'domoclin:' ? 'text-red-500' : 'text-blue-500'}>
                {line.timestamp !== -9999 && `[${formatElapsedTime(line.timestamp)}] `}{line.message} {line.sender}
            </span>{' '}
            <span className={line.timestamp === -9999 ? 'text-yellow-600' : ''}>
                {line.content}
            </span>
          </p>
        ))}
      </div>

        <form onSubmit={handleInputSubmit} className="mt-4">
            <input
                type="text"
                placeholder="Type '/' to see commands"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border bg-grey bg-opacity-[0.03]"
                disabled={!chatRendered}
            />

        </form>

    </div>
  );
};

export default ChatBox;
